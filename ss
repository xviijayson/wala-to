import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function App() {
  const [screen, setScreen] = useState("Home");
  const [name, setName] = useState("");
  const [yearSection, setYearSection] = useState("");
  const [course, setCourse] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleEdit = (index) => {
     const user = users[index];
     setName(user.name);
     setYearSection(user.yearSection);
     setCourse(user.course);
     setEditingIndex(index);
   };
 
   const handleDelete = (index) => {
     const updatedUsers = users.filter((_, i) => i !== index);
     setUsers(updatedUsers);
   };

  const handleAddOrEdit = () => {
     if (editingIndex !== null) {
       const updatedUsers = [...users];
       updatedUsers[editingIndex] = { name, yearSection, course };
       setUsers(updatedUsers);
       setEditingIndex(null);
     } else {
       setUsers([...users, { name, yearSection, course }]);
     }
     setName("");
     setYearSection("");
     setCourse("");
   };

 

  return screen === "Home" ? (
    <View style={styles.container}>
      <Text style={styles.title}>User Details</Text>

      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Year/Section" value={yearSection} onChangeText={setYearSection} />
      <TextInput style={styles.input} placeholder="Course" value={course} onChangeText={setCourse} />
      <Button title={editingIndex !== null ? "Update" : "Add"} onPress={handleAddOrEdit} />
      

      <FlatList
        data={users}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => { setSelectedUser(item); setScreen("Details"); }} style={styles.listItem}>
            <Text style={styles.nameText}>{item.name}</Text>
          </TouchableOpacity>
          <View style={styles.listItem}>
             <Text>{item.name} - {item.yearSection} - {item.course}</Text>
             <View style={styles.actions}>
               <TouchableOpacity onPress={() => handleEdit(index)} style={styles.editButton}>
                 <Text style={styles.buttonText}>Edit</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => handleDelete(index)} style={styles.deleteButton}>
                 <Text style={styles.buttonText}>Delete</Text>
               </TouchableOpacity>
             </View>
           </View>
         )}
          
        )}
      />
    </View>
  ) : (
    <View style={styles.detailsContainer}>
      <Image source={{ uri: "https://www.sify.com/wp-content/uploads/2024/05/humanoid_robot_vecteezy1-768x756.jpg" }} style={styles.image} />
      <Text style={styles.detailsText}>Name: {selectedUser.name}</Text>
      <Text style={styles.detailsText}>Year/Section: {selectedUser.yearSection || "N/A"}</Text>
      <Text style={styles.detailsText}>Course: {selectedUser.course || "N/A"}</Text>
      <Button title="Back" onPress={() => setScreen("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f9fa" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginVertical: 5, borderRadius: 5 },
  listItem: { padding: 10, borderBottomWidth: 1, backgroundColor: "#ddd", marginVertical: 5 },
  nameText: { fontSize: 18, fontWeight: "bold" },
  detailsContainer: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  detailsText: { fontSize: 18, marginTop: 10 },
  image: { width: 150, height: 150, borderRadius: 10 },
});
