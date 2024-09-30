import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <Ionicons name="search" size={24} color="grey" />
        <TextInput placeholder='Search conditions, doctors...'/>
      </View>
      <Text style={styles.Mheading}>Let's find your doctor</Text>

      {/* First Row */}
      <View style={styles.OuterContainer}>
        {/* Box 1*/}
        <View style={styles.innerContainer}>
          <Ionicons name="person" size={80} color="grey" />
          {/* For Heading*/}
          <Text style={styles.heading}>Dr. John Smith</Text>
          {/* For Paragraph*/}
          <Text style={styles.paragraph}>Dermatologist</Text>
          {/* For Button*/}
          <TouchableOpacity style={styles.button}>
            <Ionicons name="star" size={20} color="gold"  />
            <Text> 4.9</Text>
          </TouchableOpacity>
        </View>

        {/* Box 2*/}
        <View style={styles.innerContainer}>
          <Ionicons name="person" size={80} color="grey" />
          {/* For Heading*/}
          <Text style={styles.heading}>Dr. Anna Dinn</Text>
          {/* For Paragraph*/}
          <Text style={styles.paragraph}>Psychologist</Text>
          {/* For Button*/}
          <TouchableOpacity style={styles.button}>
            <Ionicons name="star" size={20} color="gold" />
            <Text> 4.9</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Second Row */}
      <View style={styles.OuterContainer}>
        {/* Box 3*/}
        <View style={styles.innerContainer}>
          <Ionicons name="person" size={80} color="grey" />
          {/* For Heading*/}
          <Text style={styles.heading}>Dr. Angela Rayez</Text>
          {/* For Paragraph*/}
          <Text style={styles.paragraph}>Therapist</Text>
          {/* For Button*/}
          <TouchableOpacity style={styles.button}>
            <Ionicons name="star" size={20} color="gold" />
            <Text> 4.8</Text>
          </TouchableOpacity>
        </View>

        {/* Box 4*/}
        <View style={styles.innerContainer}>
          <Ionicons name="person" size={80} color="grey" />
          {/* For Heading*/}
          <Text style={styles.heading}>Dr. Chris Bronte</Text>
          {/* For Paragraph*/}
          <Text style={styles.paragraph}>Dentist</Text>
          {/* For Button*/}
          <TouchableOpacity style={styles.button}>
            <Ionicons name="star" size={20} color="gold" />
            <Text> 5.1</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#e8f8fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchbar: {
    backgroundColor: 'white',
    borderRadius:20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#bdbfbf',
    width: '95%',
  },
  Mheading:{

    fontSize:20,
    fontWeight: 'bold',
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize:17
  },
  paragraph: {
    color: '#bdbfbf',
    marginBottom: 5,
    fontSize:15
  },
  innerContainer: {
    borderRadius:20,
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
    width: '45%',
    alignItems:'center',
    justifyContent: 'center'
  },
  OuterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderRadius:20,
    backgroundColor: '#e8f8fc',
    width:70,
    padding:5,
    justifyContent: 'center'

  },
});
