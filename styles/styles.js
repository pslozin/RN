import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
  width: 300,
  height: 45,
  margin: 12,
  borderWidth: 1,
  borderColor: '#87CEFA',
  borderRadius: 10,
  paddingHorizontal: 13,
  fontSize: 16,
},
    button: {
    backgroundColor: '#87CEFA',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subButton: {
    backgroundColor: '#ce690b',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  userRow: {
  width: 320,
  paddingVertical: 15,
  paddingHorizontal: 15,
  marginVertical: 6,
  backgroundColor: '#f2f2f2',
  borderRadius: 10,
},

userText: {
  fontSize: 28,
  lineHeight: 28,
},
link: {
  color: 'blue',
  textDecorationLine: 'underline',
},

about:{
   fontSize: 28,
}

});

export default styles;


//