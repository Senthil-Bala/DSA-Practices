// Subarray with given sum
// Given an unsorted array A of size N that contains only positive integers, find a continuous sub-array that adds to a given number S and return the left and right index(1-based indexing) of that subarray.

// In case of multiple subarrays, return the subarray indexes which come first on moving from left to right.

// Note:- You have to return an ArrayList consisting of two elements left and right. In case no such subarray exists return an array consisting of element -1.

// Example 1:

// Input:
// N = 5, S = 12
// A[] = {1,2,3,7,5}
// Output: 2 4
// Explanation: The sum of elements
// from 2nd position to 4th position
// is 12.
// Example 2:

// Input:
// N = 10, S = 15
// A[] = {1,2,3,4,5,6,7,8,9,10}
// Output: 1 5
// Explanation: The sum of elements
// from 1st position to 5th position
// is 15.
// Your Task:
// You don't need to read input or print anything. The task is to complete the function subarraySum() which takes arr, N, and S as input parameters and returns an ArrayList containing the starting and ending positions of the first such occurring subarray from the left where sum equals to S. The two indexes in the array should be according to 1-based indexing. If no such subarray is found, return an array consisting of only one element that is -1.

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 <= N <= 105
// 0 <= Ai <= 109
// 0<= S <= 109

// function subarraySum(arr, N, S) {
//     let left = 0;
//     let right = 0;
//     let sum = 0;

//     while (right <= N) {
//         // Check if the current sum equals S or exceeds it
//         if (sum === S) {
//             return [left + 1, right]; // Adding 1 to convert from 0-based indexing to 1-based indexing
//         } else if (sum < S) {
//             // Expand the window by moving the right pointer
//             sum += arr[right];
//             right++;
//         } else {
//             // Shrink the window by moving the left pointer
//             sum -= arr[left];
//             left++;
//         }
//     }

//     return [-1]; // Return -1 if no subarray is found
// }

// function findMissing(arr) {
//     let set = new Set(arr);
//     let n = arr.length + 1; // Increment the length by 1 for the full range 1 to N

//     for (let i = 1; i <= n; i++) {
//         if (!set.has(i)) {
//             return i;
//         }
//     }

//     return -1; // Return -1 if no missing number is found (optional)
// }

// let arr = [6, 1, 2, 8, 3, 4, 7, 10, 5];
// console.log(findMissing(arr));

// Kadane's Algorithm
// Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.

// Example 1:

// Input:
// N = 5
// Arr[] = {1,2,3,-2,5}
// Output:
// 9
// Explanation:
// Max subarray sum is 9
// of elements (1, 2, 3, -2, 5) which
// is a contiguous subarray.
// Example 2:

// Input:
// N = 4
// Arr[] = {-1,-2,-3,-4}
// Output:
// -1
// Explanation:
// Max subarray sum is -1
// of element (-1)

// Your Task:
// You don't need to read input or print anything. The task is to complete the function maxSubarraySum() which takes Arr[] and N as input parameters and returns the sum of subarray with maximum sum.

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 ≤ N ≤ 106
// -107 ≤ A[i] ≤ 107

// function maxSubarraySum(arr,n) {
//     let left=arr[0];
//     let right=arr[0];

//     for(let i=1;i<n;i++){
//         left=Math.max(arr[i],left+arr[i]);
//         right=Math.max(right,left)
//     }
//     return right ;

// }

// // Test cases
// const arr1 = [1, 2, 3, -2, 5];
// const N1 = 5;

// const arr2 = [-1, -2, -3, -4];
// const N2 = 4;

// console.log(maxSubarraySum(arr1, N1)); // Output: 9
// console.log(maxSubarraySum(arr2, N2)); // Output: -1

// Minimum number of jumps
// Given an array of N integers arr[] where each element represents the maximum length of the jump that can be made forward from that element. This means if arr[i] = x, then we can jump any distance y such that y ≤ x.
// Find the minimum number of jumps to reach the end of the array (starting from the first element). If an element is 0, then you cannot move through that element.

// Note: Return -1 if you can't reach the end of the array.

// Example 1:

// Input:
// N = 11
// arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9}
// Output: 3
// Explanation:
// First jump from 1st element to 2nd
// element with value 3. Now, from here
// we jump to 5th element with value 9,
// and from here we will jump to the last.
// Example 2:

// Input :
// N = 6
// arr = {1, 4, 3, 2, 6, 7}
// Output: 2
// Explanation:
// First we jump from the 1st to 2nd element
// and then jump to the last element.

// Your task:
// You don't need to read input or print anything. Your task is to complete function minJumps() which takes the array arr and it's size N as input parameters and returns the minimum number of jumps. If not possible return -1.

// Expected Time Complexity: O(N)
// Expected Space Complexity: O(1)

// Constraints:
// 1 ≤ N ≤ 107
// 0 ≤ arri ≤ 107

// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

// Example 1:

// Input:
// N = 5
// arr[]= {0 2 1 2 0}
// Output:
// 0 0 1 2 2
// Explanation:
// 0s 1s and 2s are segregated
// into ascending order.
// Example 2:

// Input:
// N = 3
// arr[] = {0 1 0}
// Output:
// 0 0 1
// Explanation:
// 0s 1s and 2s are segregated
// into ascending order.

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function sort012() that takes an array arr and N as input parameters and sorts the array in-place.

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)

// let arr=[0,1,0,2,10];
// console.log(arr.sort((a,b)=>a-b)); TC wil be O (n log n)

// Above same problem in  TC of O(N)

// function sortsArrays(arr) {
//     let low = 0,
//         mid = 0,
//         high = arr.length - 1;

//     while (mid <= high) {
//         switch (arr[mid]) {
//             case 0:
//                 [arr[low], arr[mid]] = [arr[mid], arr[low]];
//                 low++;
//                 mid++; // Increment mid as 0 is moved towards the low end
//                 break;

//             case 1:
//                 mid++; // No swapping needed, move mid ahead
//                 break;

//             case 2:
//                 [arr[mid], arr[high]] = [arr[high], arr[mid]];
//                 high--;
//                 // Don't increment mid here; it needs further examination
//                 break;
//         }
//     }
//     return arr; // Return the sorted array
// }

// console.log(sortsArrays([0, 1, 0, 2])); // Output: [0, 0, 1, 2]

// function duplicates(arr) {
//     const duplicatesList = [];

//     for (let i = 0; i < arr.length; i++) {
//         const index = Math.abs(arr[i]);
//         if (arr[index] < 0) {
//             duplicatesList.push(index);
//         } else {
//             arr[index] = -arr[index];
//         }
//     }

//     return duplicatesList.length === 0 ? [-1] : duplicatesList.sort((a, b) => a - b);
// }

// // Test cases
// console.log(duplicates([0, 3, 1, 2])); // Output: [-1]
// console.log(duplicates([2, 3, 1, 2, 3])); // Output: [2, 3]

//REVERSE A NUMBER WITH TC OF O(N)

// function reverseNumber(num) {
//     let reversed=0;
//     while(num!==0){
//         let rem=num%10;
//         reversed=reversed*10+rem;
//         num=Math.floor(num/10)
//     }
//     return reversed;
// }

// console.log(reverseNumber(5678));

//Find duplicates in an array
// Given an array a of size N which contains elements from 0 to N-1, you need to find all the elements occurring more than once in the given array. Return the answer in ascending order. If no such element is found, return list containing [-1].

// Note: The extra space is only for the array to be returned. Try and perform all operations within the provided array.

// Example 1:

// Input:
// N = 4
// a[] = {0,3,1,2}
// Output:
// -1
// Explanation:
// There is no repeating element in the array. Therefore output is -1.
// Example 2:

// Input:
// N = 5
// a[] = {2,3,1,2,3}
// Output:
// 2 3
// Explanation:
// 2 and 3 occur more than once in the given array.
// Your Task:
// Complete the function duplicates() which takes array a[] and n as input as parameters and returns a list of elements that occur more than once in the given array in a sorted manner.

// Expected Time Complexity: O(n).
// Expected Auxiliary Space: O(n).
// function findDuplicates(arr){
//     let duplicates=[];
//     for(let i=0;i<arr.length;i++){
//         let index=Math.abs(arr[i]);
//         if(arr[index]<0){
//             duplicates.push(index)
//         }
//         else{
//             arr[index]=-arr[index]
//         }
//     }
//     return duplicates.length===0 ? [-1] : duplicates.sort((a,b)=>a-b);
//     // return duplicates;
// }

// console.log(findDuplicates([5,2, 3, 1, 2,5, 3]));

//Leaders Array

// Given an array A of positive integers. Your task is to find the leaders in the array. An element of array is leader if it is greater than or equal to all the elements to its right side. The rightmost element is always a leader.

// Example 1:

// Input:
// n = 6
// A[] = {16,17,4,3,5,2}
// Output: 17 5 2
// Explanation: The first leader is 17
// as it is greater than all the elements
// to its right.  Similarly, the next
// leader is 5. The right most element
// is always a leader so it is also
// included.
// Example 2:

// Input:
// n = 5
// A[] = {1,2,3,4,0}
// Output: 4 0
// Explanation: 0 is the rightmost element
// and 4 is the only element which is greater
// than all the elements to its right.
// Your Task:
// You don't need to read input or print anything. The task is to complete the function leader() which takes array A and n as input parameters and returns an array of leaders in order of their appearance.

// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(n)

// Constraints:
// 1 <= n <= 107
// 0 <= Ai <= 107

// function leadersArray(arr){
//     let maxRight=arr[arr.length-1];
//     let leaders=[maxRight];
// for(let i=arr.length-2;i>=0;i--){
//     if(arr[i]>maxRight){
//         maxRight=arr[i];
//         leaders.unshift(maxRight)
//     }
// }
// return leaders;
// }

// console.log(leadersArray([16, 17, 4, 3, 5, 2])); // Output: [17, 5, 2]
// console.log(leadersArray([1, 2, 3, 4, 0])); // Output: [4, 0]

/////////////////////////////////////////////////////////////////////////
// Given an array A of N elements. Find the majority element in the array. A majority element in an array A of size N is an element that appears strictly more than N/2 times in the array.

// Example 1:

// Input:
// N = 3
// A[] = {1,2,3}
// Output:
// -1
// Explanation:
// Since, each element in
// {1,2,3} appears only once so there
// is no majority element.
// Example 2:

// Input:
// N = 5
// A[] = {3,1,3,3,2}
// Output:
// 3
// Explanation:
// Since, 3 is present more
// than N/2 times, so it is
// the majority element.

// Your Task:
// The task is to complete the function majorityElement() which returns the majority element in the array. If no majority exists, return -1.

// Expected Time Complexity: O(N).
// Expected Auxiliary Space: O(1).

// Constraints:
// 1 ≤ N ≤ 107
// 0 ≤ Ai ≤ 106

// function majorityElement(arr){
//     let map=new Map();

//     for(let keys of arr){
//         if(map.has(keys)){
//             map.set(keys,map.get(keys)+1)
//         }
//         else{
//             map.set(keys,1)
//         }
//     }

//     for(let [keys,value] of map){
//         if(value > arr.length/2){
//             return keys;
//         }
//         return -1;
//     }
// }

// console.log(majorityElement([1, 2, 3])); // Output: -1
// console.log(majorityElement([3, 1, 3, 3, 2])); // Output: 3

////////////////////////////////////////////////////////////////////////////////////
// Kth smallest element

// Given an array arr[] and an integer K where K is smaller than size of array, the task is to find the Kth smallest element in the given array. It is given that all array elements are distinct.

// Note :-  l and r denotes the starting and ending index of the array.

// Example 1:

// Input:
// N = 6
// arr[] = 7 10 4 3 20 15
// K = 3
// L=0 R=5

// Output : 7
// Explanation :
// 3rd smallest element in the given
// array is 7.
// Example 2:

// Input:
// N = 5
// arr[] = 7 10 4 20 15
// K = 4 L=0 R=4
// Output : 15
// Explanation :
// 4th smallest element in the given
// array is 15.
// Your Task:
// You don't have to read input or print anything. Your task is to complete the function kthSmallest() which takes the array arr[], integers l and r denoting the starting and ending index of the array and an integer K as input and returns the Kth smallest element.

// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(log(n))
// Constraints:
// 1 <= N <= 105
//  L==0
//  R==N-1
// 1<= arr[i] <= 105
// 1 <= K <= N

// function kthSmallestNumber(arr,k) {
//   let sortedArray = arr.sort((a,b)=>a-b)
// //   console.log(sortedArray);

// return sortedArray[k-1];
// }

// console.log(kthSmallestNumber([7, 10, 4, 3, 20, 15],3));
// console.log(kthSmallestNumber([ 7 ,10 ,4 ,20 ,15],4));

//////////////////////////////////////////////////////////////////////////////

// Given an array A of n positive numbers. The task is to find the first equilibrium point in an array. Equilibrium point in an array is an index (or position) such that the sum of all elements before that index is same as sum of elements after it.

// Note: Return equilibrium point in 1-based indexing. Return -1 if no such point exists.

// Example 1:

// Input:
// n = 5
// A[] = {1,3,5,2,2}
// Output:
// 3
// Explanation:
// equilibrium point is at position 3 as sum of elements before it (1+3) = sum of elements after it (2+2).
// Example 2:

// Input:
// n = 1
// A[] = {1}
// Output:
// 1
// Explanation:
// Since there's only element hence its only the equilibrium point.
// Your Task:
// The task is to complete the function equilibriumPoint() which takes the array and n as input parameters and returns the point of equilibrium.

// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 <= n <= 105
// 1 <= A[i] <= 109

// function findEquiibirium(arr){
//     let n=arr.length;

//     let totalSum=0;

//     for(let i=0;i<arr.length;i++){
//         totalSum+=arr[i];
//     }

//     let leftSum=0;

//     for(let i=0;i<arr.length;i++){
//         totalSum-=arr[i]

//     if(leftSum===totalSum){
//         return i+1;
//     }
//     leftSum+=arr[i]
// }
//     return -1;
// }

// // Test cases
// console.log(findEquiibirium([1, 3, 5, 2, 2])); // Output: 3
// console.log(findEquiibirium([1])); // Output: 1

//////////////////////////////////////////////////////////////////////////

// Parenthesis Checker// Fast-Track your resumes to top companies and get the job you deserve! Register for hiring challenge exclusively for working professionals

// Given an expression string x. Examine whether the pairs and the orders of {,},(,),[,] are correct in exp.
// For example, the function should return 'true' for exp = [()]{}{[()()]()} and 'false' for exp = [(]).

// Note: The drive code prints "balanced" if function return true, otherwise it prints "not balanced".

// Example 1:

// Input:
// {([])}
// Output:
// true
// Explanation:
// { ( [ ] ) }. Same colored brackets can form
// balanced pairs, with 0 number of
// unbalanced bracket.
// Example 2:

// Input:
// ()
// Output:
// true
// Explanation:
// (). Same bracket can form balanced pairs,
// and here only 1 type of bracket is
// present and in balanced way.
// Example 3:

// Input:
// ([]
// Output:
// false
// Explanation:
// ([]. Here square bracket is balanced but
// the small bracket is not balanced and
// Hence , the output will be unbalanced.
// Your Task:
// This is a function problem. You only need to complete the function ispar() that takes a string as a parameter and returns a boolean value true if brackets are balanced else returns false. The printing is done automatically by the driver code.

// Expected Time Complexity: O(|x|)
// Expected Auixilliary Space: O(|x|)

// function ispar(exp) {
//     const stack = [];
//     const pairs = {
//         '(': ')',
//         '{': '}',
//         '[': ']'
//     };

//     for (let i = 0; i < exp.length; i++) {
//         const char = exp[i];
//         if (pairs[char]) {
//             stack.push(char);
//         } else {
//             const top = stack.pop();
//             if (pairs[top] !== char) {
//                 return false; // Unmatched closing bracket
//             }
//         }
//     }

//     return stack.length === 0; // Check if all opening brackets are closed
// }

// // Test cases
// console.log(ispar("{([])}")); // Output: true
// console.log(ispar("()")); // Output: true
// console.log(ispar("([ ]")); // Output: false

// let str="One Two three Four";
// let arr=str.split(" ");
// // console.log(arr);

// for(let i=0;i<arr.length;i++){
//     if(arr[i].length%2!==0){
//         arr[i]=arr[i].split("").reverse().join("");
//     }

// }
// console.log(arr.join(" "))

// ...............................................................................//

// Minimize the Heights II

// Given an array arr[] denoting heights of N towers and a positive integer K.

// For each tower, you must perform exactly one of the following operations exactly once.

// Increase the height of the tower by K
// Decrease the height of the tower by K
// Find out the minimum possible difference between the height of the shortest and tallest towers after you have modified each tower.

// You can find a slight modification of the problem here.
// Note: It is compulsory to increase or decrease the height by K for each tower. After the operation, the resultant array should not contain any negative integers.

// Example 1:

// Input:
// K = 2, N = 4
// Arr[] = {1, 5, 8, 10}
// Output:
// 5
// Explanation:
// The array can be modified as
// {1+k, 5-k, 8-k, 10-k} = {3, 3, 6, 8}.
// The difference between
// the largest and the smallest is 8-3 = 5.
// Example 2:

// Input:
// K = 3, N = 5
// Arr[] = {3, 9, 12, 16, 20}
// Output:
// 11
// Explanation:
// The array can be modified as
// {3+k, 9+k, 12-k, 16-k, 20-k} -> {6, 12, 9, 13, 17}.
// The difference between
// the largest and the smallest is 17-6 = 11.
// Your Task:
// You don't need to read input or print anything. Your task is to complete the function getMinDiff() which takes the arr[], n, and k as input parameters and returns an integer denoting the minimum difference.

// Expected Time Complexity: O(N*logN)
// Expected Auxiliary Space: O(N)

// function findMinimumHeights(arr,k){
//     let diff;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2!==0){
//             arr[i]=arr[i]+k;
//         }
//         else{
//             arr[i]=arr[i]-k;
//         }
//     }
//     console.log(arr);
// diff=Math.max(...arr)-Math.min(...arr);
// return diff
// }
// console.log(findMinimumHeights([3, 9, 12, 16, 20],3))
// console.log(findMinimumHeights([1, 5, 8, 10],2))

// Binary Search
// Given a sorted array of size N and an integer K, find the position(0-based indexing) at which K is present in the array using binary search.

// Example 1:

// Input:
// N = 5
// arr[] = {1 2 3 4 5}
// K = 4
// Output: 3
// Explanation: 4 appears at index 3.

// Example 2:

// Input:
// N = 5
// arr[] = {11 22 33 44 55}
// K = 445
// Output: -1
// Explanation: 445 is not present.

// Your Task:
// You dont need to read input or print anything. Complete the function binarysearch() which takes arr[], N and K as input parameters and returns the index of K in the array. If K is not present in the array, return -1.

// Expected Time Complexity: O(LogN)
// Expected Auxiliary Space: O(LogN) if solving recursively and O(1) otherwise.

// Constraints:

// 1 <= N <= 105
// 1 <= arr[i] <= 106
// 1 <= K <= 106

// function binarySearch(arr,target){
//     let left=0,right=arr.length-1;

//     while(left<=right){
//         let mid=Math.floor((left+right)/2);
//         if(target===arr[mid]){
//             return mid;
//         }
//         else if(target<arr[mid]){
//             right=mid-1;
//         }
//         else if(target>arr[mid]){
//             left=mid+1;
//         }

//     }
//     return -1
// }

// console.log(binarySearch([1 ,2 ,3 ,4, 5],8))

// function findPlatform(arr, dep, n) {
//     // Sort arrival and departure times
//     arr.sort((a, b) => a - b);
//     dep.sort((a, b) => a - b);

//     let platforms = 1; // Minimum one platform needed
//     let result = 1;
//     let i = 1;
//     let j = 0;

//     while (i < n && j < n) {
//         if (arr[i] <= dep[j]) {
//             // If a train arrives before the departure of another, increment platform count
//             platforms++;
//             i++;
//         } else {
//             // If a train departs before the arrival of another, decrement platform count
//             platforms--;
//             j++;
//         }

//         // Update result to store the maximum number of platforms needed simultaneously
//         result = Math.max(result, platforms);
//     }

//     return result;
// }

// function findPlatform(arr, dep, n) {
//   let platform = 1,
//     result = 1,
//     i = 1,
//     j = 0;

//   while (i < n && j < n) {
//     if (arr[i] <= dep[j]) {
//       platform++;
//       i++;
//     } else {
//       platform--;
//       j++;
//     }

//     result = Math.max(result, platform);
//   }
//   return result;
// }

// // Test cases
// console.log(
//   findPlatform(
//     [900, 940, 950, 1100, 1500, 1800],
//     [910, 1200, 1120, 1130, 1900, 2000],
//     6
//   )
// ); // Output: 3
// console.log(findPlatform([900, 1100, 1235], [1000, 1200, 1240], 3)); // Output: 1

// Count pairs with given sum

// Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K.

// Example 1:

// Input:
// N = 4, K = 6
// arr[] = {1, 5, 7, 1}
// Output: 2
// Explanation:
// arr[0] + arr[1] = 1 + 5 = 6
// and arr[1] + arr[3] = 5 + 1 = 6.

// Example 2:

// Input:
// N = 4, K = 2
// arr[] = {1, 1, 1, 1}
// Output: 6
// Explanation:
// Each 1 will produce sum 2 with any 1.

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function getPairsCount() which takes arr[], n and k as input parameters and returns the number of pairs that have sum K.

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(N)

// Constraints:
// 1 <= N <= 105
// 1 <= K <= 108
// 1 <= Arr[i] <= 106
// function countPairs(arr,target){
//     let count=0;
// for(let i=0;i<arr.length-1;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j]===target){
//             count++;
//         }
//     }
// }
// return count;
// }
// console.log(countPairs([1, 1, 1, 1],2)) with TC of O(N^2) and SC O(1)

//Peak Element

// Peak element

// An element is called a peak element if its value is not smaller than the value of its adjacent elements(if they exists). Given an array arr[] of size N, Return the index of any one of its peak elements.
// Note: The generated output will always be 1 if the index that you return is correct. Otherwise output will be 0. Also, arr[] will be in ascending order before the peak element, and in descending order after that.

// Example 1:

// Input:
// N = 3
// arr[] = {1,2,3}
// Possible Answer: 2
// Generated Output: 1
// Explanation: index 2 is 3.
// It is the peak element as it is
// greater than its neighbour 2.
// If 2 is returned then the generated output will be 1 else 0.
// Example 2:

// Input:
// N = 3
// arr[] = {3,4,2}
// Possible Answer: 1
// Output: 1
// Explanation: 4 (at index 1) is the
// peak element as it is greater than
// it's neighbor elements 3 and 2.
// If 1 is returned then the generated output will be 1 else 0.

// function findPeak(arr){
//     for(let i=0;i<arr.length;i++){
//         if((i===0 || arr[i]>arr[i-1]) && (i===arr.length-1 || arr[i]>arr[i+1])){
//             return i,arr[i];
//         }

//     }
//     return -1;
// }

// console.log(findPeak([3,4,2]))

// function findRepeating(arr){
//     let duplicates=[];
//     for(let i=0;i<arr.length;i++){
//         let index=Math.abs(arr[i]);

//         if(arr[index]<0){
//             duplicates.push(index)
//         }
//         else{
//             arr[index]=-arr[index];
//         }
//     }
//     return duplicates;
// }

// function findRepeating(arr) {
//     let set = new Set();
//     let duplicates = new Set(); // Using a set for duplicates to avoid linear includes() check

//     for (let i = 0; i < arr.length; i++) {
//         if (set.has(arr[i])) {
//             duplicates.add(arr[i]);
//         } else {
//             set.add(arr[i]);
//         }
//     }

//     return Array.from(duplicates);
// }

// console.log(findRepeating([2, 5, 7, 7, 9, 8, 2, 5, 9, 10, 10]));

// function findCommons(arr1, arr2, arr3) {
//     const set1 = new Set(arr1);
//     const set2 = new Set(arr2);
//     const set3 = new Set(arr3);
//     const intersection = [];

//     // Find the intersection of all three sets
//     for (let elem of set1) {
//         if (set2.has(elem) && set3.has(elem)) {
//             intersection.push(elem);
//         }
//     }

//     return intersection;
// }

// let arr1 = [1, 5, 10, 20, 40, 80];
// let arr2 = [6, 7, 20, 80, 100];
// let arr3 = [3, 4, 15, 20, 30, 70, 80, 120];
// console.log(findCommons(arr1, arr2, arr3));

// function maxProduct(arr) {
//     if (arr.length === 0) return 0;

//     let maxEndingHere = arr[0];
//     let minEndingHere = arr[0];
//     let maxProduct = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             [maxEndingHere, minEndingHere] = [minEndingHere, maxEndingHere];
//         }

//         maxEndingHere = Math.max(arr[i], maxEndingHere * arr[i]);
//         minEndingHere = Math.min(arr[i], minEndingHere * arr[i]);

//         maxProduct = Math.max(maxProduct, maxEndingHere);
//     }

//     return maxProduct;
// }

// // Test cases
// console.log(maxProduct([6, -3, -10, 0, 2])); // Output: 180
// console.log(maxProduct([2, 3, 4, 5, -1, 0])); // Output: 120

// Union of two arrays

// Given two arrays a[] and b[] of size n and m respectively. The task is to find the number of elements in the union between these two arrays.

// Union of the two arrays can be defined as the set containing distinct elements from both the arrays. If there are repetitions, then only one occurrence of element should be printed in the union.

// Note : Elements are not necessarily distinct.

// Example 1:

// Input:
// 5 3
// 1 2 3 4 5
// 1 2 3
// Output:
// 5
// Explanation:
// 1, 2, 3, 4 and 5 are the
// elements which comes in the union set
// of both arrays. So count is 5.
// Example 2:

// Input:
// 6 2
// 85 25 1 32 54 6
// 85 2
// Output:
// 7
// Explanation:
// 85, 25, 1, 32, 54, 6, and
// 2 are the elements which comes in the
// union set of both arrays. So count is 7.
// Your Task:
// Complete doUnion function that takes a, n, b, m as parameters and returns the count of union elements of the two arrays. The printing is done by the driver code.

// Constraints:
// 1 ≤ n, m ≤ 105
// 0 ≤ a[i], b[i] < 105

// Expected Time Complexity : O(n+m)
// Expected Auxilliary Space : O(n+m)

// function findUnions(arr1,arr2){
// let unionArray=arr1.concat(arr2);
// let set=new Set(unionArray);
// return set.size;
// }
// let arr1=[85 ,25 ,1 ,32 ,54 ,6];
// let arr2=[85,2];
// console.log(findUnions(arr1,arr2))

// function smallestMissingNumber(arr){
//    let n=arr.length+1;
//    let set=new Set(arr);
//    for(let i=1;i<=n;i++){
//     if(!set.has(i)){
//         return i;
//     }
//    }
//    return -1;

// }
// console.log(smallestMissingNumber([0,-10,1,3,-20]))

// function isPalindrome(str) {
//     return str.split("").reverse().join("")===str ? 1 : 0;
// }

// console.log(isPalindrome("dada")) TC O(N)

// function isPalindrome(str) {
//     let left = 0;
//     let right = str.length - 1;

//     while (left < right) {
//         if (str[left] !== str[right]) {
//             return 0; // If characters at left and right positions don't match, it's not a palindrome
//         }
//         left++;
//         right--;
//     }
//     return 1; // If the loop completes without returning 0, the string is a palindrome
// }

// console.log(isPalindrome("dada")); // Output: 1  TC WILL BE O(N/2)

//Triplets with sum as 0 return 1 else 0

// function findTriplets(arr, n) {
//     for (let i = 0; i < n - 2; i++) {
//         for (let j = i + 1; j < n - 1; j++) {
//             for (let k = j + 1; k < n; k++) {
//                 if (arr[i] + arr[j] + arr[k] === 0) {
//                     return 1; // Triplet found
//                 }
//             }
//         }
//     }
//     return 0; // No triplet found
// }

// // Test cases
// console.log(findTriplets([0, -1, 2, -3, 1], 5)); // Output: 1
// console.log(findTriplets([1, 2, 3], 3)); // Output: 0  HERE TC WILL BE O(N^3)

// function findTriplets(arr){
//     arr.sort((a,b)=>a-b);

// let n=arr.length;

// for(let i=0;i<n-2;i++){
//     let left=i+1,right=n-1;

//     while(left<right){
//         let currentSum=arr[i]+arr[left]+arr[right]
//         if(currentSum===0){
//             return 1;
//         }
//         else if(currentSum<0){
//             left++;
//         }
//         else{
//             right--;
//         }
//     }
//     return 0;
// }

// }
// console.log(findTriplets([0, -1, 2, -3, 1], 5)); // Output: 1
// console.log(findTriplets([1, 2, 3], 3)); // Output: 0  HERE TC WILL BE O(N^2)

// Maximum of all subarrays of size k
// Given an array arr[] of size N and an integer K. Find the maximum for each and every contiguous subarray of size K.

// Example 1:
// Input:
// N = 9, K = 3
// arr[] = 1 2 3 1 4 5 2 3 6
// Output:
// 3 3 4 5 5 5 6
// Explanation:
// 1st contiguous subarray = {1 2 3} Max = 3
// 2nd contiguous subarray = {2 3 1} Max = 3
// 3rd contiguous subarray = {3 1 4} Max = 4
// 4th contiguous subarray = {1 4 5} Max = 5
// 5th contiguous subarray = {4 5 2} Max = 5
// 6th contiguous subarray = {5 2 3} Max = 5
// 7th contiguous subarray = {2 3 6} Max = 6
// Example 2:

// Input:
// N = 10, K = 4
// arr[] = 8 5 10 7 9 4 15 12 90 13
// Output:
// 10 10 10 15 15 90 90
// Explanation:
// 1st contiguous subarray = {8 5 10 7}, Max = 10
// 2nd contiguous subarray = {5 10 7 9}, Max = 10
// 3rd contiguous subarray = {10 7 9 4}, Max = 10
// 4th contiguous subarray = {7 9 4 15}, Max = 15
// 5th contiguous subarray = {9 4 15 12},
// Max = 15
// 6th contiguous subarray = {4 15 12 90},
// Max = 90
// 7th contiguous subarray = {15 12 90 13},
// Max = 90
// Your Task:
// You dont need to read input or print anything. Complete the function max_of_subarrays() which takes the array, N and K as input parameters and returns a list of integers denoting the maximum of every contiguous subarray of size K.

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(k)

// Constraints:
// 1 ≤ N ≤ 105
// 1 ≤ K ≤ N
// 0 ≤ arr[i] ≤ 107

// function findSubarrayWithMaxSum(arr, k) {
//     let left = 0,
//         right = 0,
//         sum = 0,
//         ans = 0,
//         n = arr.length;

//     while (right < n) {
//         sum += arr[right];

//         if (right - left + 1 === k) {
//             if (sum > ans) {
//                 ans = sum;
//             }
//             sum -= arr[left];
//             left++; // Correcting the variable here from 'i' to 'left'
//         }
//         right++;
//     }
//     return ans;
// }

// console.log(findSubarrayWithMaxSum([8, 5, 10, 7, 9, 4, 15, 12, 90, 13], 4));

// // Reverse words in a given string

// // Given a String S, reverse the string without reversing its individual words. Words are separated by dots.

// // Example 1:

// // Input:
// S = i.like.this.program.very.much
// Output: much.very.program.this.like.i
// Explanation: After reversing the whole
// string(not individual words), the input
// string becomes
// much.very.program.this.like.i

// Example 2:

// Input:
// S = pqr.mno
// Output: mno.pqr
// Explanation: After reversing the whole
// string , the input string becomes
// mno.pqr

// Your Task:
// You dont need to read input or print anything. Complete the function reverseWords() which takes string S as input parameter and returns a string containing the words in reversed order. Each word in the returning string should also be separated by '.'

// Expected Time Complexity: O(|S|)
// Expected Auxiliary Space: O(|S|)

// Constraints:
// 1 <= |S| <= 105

// function reverseString(str){

//     return str.split(".").reverse().join(".")
// }
// console.log(reverseString("i.like.this.program.very.much"));

// Longest consecutive subsequence

// Given an array of positive integers. Find the length of the longest sub-sequence such that elements in the subsequence are consecutive integers, the consecutive numbers can be in any order.

// Example 1:

// Input:
// N = 7
// a[] = {2,6,1,9,4,5,3}
// Output:
// 6
// Explanation:
// The consecutive numbers here
// are 1, 2, 3, 4, 5, 6. These 6
// numbers form the longest consecutive
// subsquence.
// Example 2:

// Input:
// N = 7
// a[] = {1,9,3,10,4,20,2}
// Output:
// 4
// Explanation:
// 1, 2, 3, 4 is the longest
// consecutive subsequence.

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function findLongestConseqSubseq() which takes the array arr[] and the size of the array as inputs and returns the length of the longest subsequence of consecutive integers.

// Expected Time Complexity: O(N).
// Expected Auxiliary Space: O(N).

// Constraints:
// 1 <= N <= 105
// 0 <= a[i] <= 10

// function findLongestConseqSubseq(arr){
//     let setArr=new Set(arr);
//     let maxLength=0;

//     for(let num of arr){

//         if(!setArr.has(num-1)){
//              let currentNum=num;
//              let currentLength=1;

//         while(setArr.has(currentNum+1)){
//             currentNum++;
//             currentLength++;
//         }
//         maxLength=Math.max(currentLength,maxLength);
//         }
//     }

//     return maxLength;

// }

// const arr1 = [2, 6, 1, 9, 4, 5, 3];
// const result1 = findLongestConseqSubseq(arr1);
// console.log(result1); // Output: 6

// const arr2 = [1, 9, 3, 10, 4, 20, 2];
// const result2 = findLongestConseqSubseq(arr2);
// console.log(result2); // Output: 4  tc will be here is O(N) and SC will be O(N)

// // //Method 1
// // let arr=[5,6,8,9,7,5,6,8];
// // let set=new Set(arr);
// // console.log(arr);

// // //Method 2
// // let arr=[5,6,8,9,7,5,6,8];
// // let set = new Set();
// // for(let keys of arr){
// //     set.add(keys);
// // }

// Buy and sell problem

// function findprofit(arr){
//     let buy=arr[0];
//     let profit=0;

//     for(let i=1;i<arr.length;i++){
//         if(arr[i]<buy){
//             buy=arr[i];
//         }
//         else{
//             profit+=arr[i]-buy;
//             buy=arr[i];
//         }
//     }
//     return profit ;
// }

// console.log(findprofit([4,2,2,2,4]))

// Check if two strings are anagram

// Anagram
// Given two strings a and b consisting of lowercase characters. The task is to check whether two given strings are an anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, act and tac are an anagram of each other.

// Note:-

// If the strings are anagrams you have to return True or else return False

// |s| represents the length of string s.

// Example 1:

// Input:a = geeksforgeeks, b = forgeeksgeeks
// Output: YES
// Explanation: Both the string have same characters with
//         same frequency. So, both are anagrams.
// Example 2:

// Input:a = allergy, b = allergic
// Output: NO
// Explanation: Characters in both the strings are
//         not same, so they are not anagrams.
// Your Task:
// You don't need to read input or print anything. Your task is to complete the function isAnagram() which takes the string a and string b as input parameter and check if the two strings are an anagram of each other. The function returns true if the strings are anagram else it returns false.

// Expected Time Complexity:O(|a|+|b|).
// Expected Auxiliary Space: O(Number of distinct characters).

// Constraints:
// 1 ≤ |a|,|b| ≤ 105

// function findAnagram(str1,str2){
//     if(str1.length!==str2.length){
//         return "Its not a anagram"
//     }

//     let map=new Map();

//     for(let keys of str1){
//         if(map.has(keys)){
//             map.set(keys,map.get(keys)+1)
//         }
//         else{
//             map.set(keys,1)
//         }
//     }

//     //Iterating over str2 and compare str2 char's has in map

//     for(let keys of str2){
//         if(!map.has(keys)){
//             return false;
//         }
//         map.set(keys,map.get(keys)-1)
//     }

//     for(let value of map.values()){
//         if(value!==0){
//             return false;
//         }
//     }
//     return true;
// }

// let str1='allergic'
// let str2='allergiz'

// console.log(findAnagram(str1,str2))

// permutation of string as a palindrome

// To form a palindrome from a string, the string must have certain characteristics. For a string to be a palindrome or form a palindrome through permutation, it should adhere to the following rules:

// Even-Length String: All characters in the string occur an even number of times. For example, "aabb" can form a palindrome ("abba") by rearranging the characters.

// Odd-Length String: Only one character (at most) can occur an odd number of times, while all other characters occur an even number of times. This odd occurrence character can be placed in the middle of the palindrome. For example, "aabbc" can form a palindrome ("abcba") by rearranging the characters.

// To check if a string can form a palindrome through permutation, you can count the frequency of each character. Here's an algorithm in JavaScript to determine whether a string can form a palindrome

// function canFormPalindrome(str){

//     let map=new Map();

//     for(let keys of str){
//         if(map.has(keys)){
//             map.set(keys,map.get(keys)+1)
//         }
//         else{
//             map.set(keys,1)
//         }
//     }
// let count=0;
//     for(let values of map.values()){
//         if(values %2 !==0){
//             count++;
//         }
//     }
//     return (str.length %2 ===0 && count===0 || str.length%2!==0 && count===1)
// }

// // Example usage:
// console.log(canFormPalindrome('aabb')); // Output: true
// console.log(canFormPalindrome('abcba')); // Output: true
// console.log(canFormPalindrome('aabbcc')); // Output: true
// console.log(canFormPalindrome('abc')); // Output: false

// function tripletSum(arr, target) {
//     arr.sort((a, b) => a - b); // Sort the array to use two-pointer technique
//     for (let i = 0; i < arr.length - 2; i++) {
//         let left = i + 1;
//         let right = arr.length - 1;
//         while (left < right) {
//             let currentSum = arr[i] + arr[left] + arr[right];
//             if (currentSum === target) {
//                 return [arr[i], arr[left], arr[right]];
//             } else if (currentSum < target) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }
//     return 0;
// }

// let arr = [1 ,2 ,4 ,3 ,6];
// let target = 10;
// console.log(tripletSum(arr, target));

// Largest subarray with 0 sum

// Given an array having both positive and negative integers. The task is to compute the length of the largest subarray with sum 0.

// Example 1:

// Input:
// N = 8
// A[] = {15,-2,2,-8,1,7,10,23}
// Output: 5
// Explanation: The largest subarray with
// sum 0 will be -2 2 -8 1 7.
// Your Task:
// You just have to complete the function maxLen() which takes two arguments an array A and n, where n is the size of the array A and returns the length of the largest subarray with 0 sum.

// Expected Time Complexity: O(N).
// Expected Auxiliary Space: O(N).

// Constraints:
// 1 <= N <= 105
// -1000 <= A[i] <= 1000, for each valid i

// function maxSubSrrayWithSumAsZero(arr) {
//     let sum = 0,
//         maxLength = 0;
//     let map = new Map();

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];

//         if (sum === 0) {
//             maxLength++;
//         } else if (map.has(sum)) {
//             maxLength = Math.max(maxLength, i - map.get(sum));
//         } else {
//             map.set(sum, i);
//         }
//     }
//     return maxLength;
// }

// let arr = [15, -2, 2, -8, 1, 7, 10, 23];
// console.log(maxSubSrrayWithSumAsZero(arr)); // Output: 5

// /////////////////////////////////////////////////////////////////////////////////////////////

// // First and last occurrences of x

// // Given a sorted array arr containing n elements with possibly some duplicate, the task is to find the first and last occurrences of an element x in the given array.
// // Note: If the number x is not found in the array then return both the indices as -1.

// // Example 1:

// // Input:
// // n=9, x=5
// // arr[] = { 1, 3, 5, 5, 5, 5, 67, 123, 125 }
// // Output:
// // 2 5
// // Explanation:
// // First occurrence of 5 is at index 2 and last occurrence of 5 is at index 5.
// // Example 2:

// // Input:
// // n=9, x=7
// // arr[] = { 1, 3, 5, 5, 5, 5, 7, 123, 125 }
// // Output:
// // 6 6
// // Explanation:
// // First and last occurrence of 7 is at index 6.
// // Your Task:
// // Since, this is a function problem. You don't need to take any input, as it is already accomplished by the driver code. You just need to complete the function find() that takes array arr, integer n and integer x as parameters and returns the required answer.

// // Expected Time Complexity: O(logN)
// // Expected Auxiliary Space: O(1).

// // Constraints:
// // 1 ≤ N ≤ 106
// // 1 ≤ arr[i],x ≤ 109

// // function findOccurences(arr,x){

// //     return [arr.indexOf(x),arr.lastIndexOf(x)];
// // }

// // let arr=[1, 3, 5, 5, 5, 5, 7, 123, 125];
// // let x= 5;
// // console.log(findOccurences(arr,x)) METHOD 1 USING INBUILT FUNCTIONS SUCH AS INDEX OF AND LAST INDEX OF  TC WILL BE O(N)

// // Find Transition Point

// // Given a sorted array containing only 0s and 1s, find the transition point, i.e., the first index where 1 was observed, and before that, only 0 was observed.

// // Example 1:

// // Input:
// // N = 5
// // arr[] = {0,0,0,1,1}
// // Output: 3
// // Explanation: index 3 is the transition
// // point where 1 begins.
// // Example 2:

// // Input:
// // N = 4
// // arr[] = {0,0,0,0}
// // Output: -1
// // Explanation: Since, there is no "1",
// // the answer is -1.
// // Your Task:
// // You don't need to read input or print anything. The task is to complete the function transitionPoint() that takes array arr and N as input parameters and returns the 0-based index of the position where 0 ends and 1 begins. If array does not have any 1, return -1. If array does not have any 0, return 0.

// // Expected Time Complexity: O(Log(N))
// // Expected Auxiliary Space: O(1)

// // Constraints:
// // 1 ≤ N ≤ 105
// // 0 ≤ arr[i] ≤ 1

// // function findTransition(arr){
//     let left=0,right=arr.length-1;

//     while(left<=right){
//         let mid=Math.floor((left+right)/2);

//         if(arr[mid]===1 && (mid===0 || arr[mid-1]===0)){
//             return mid;
//         }
//         else if(arr[mid]===1){
//             right=mid-1;
//         }
//         else{
//             left=mid+1;
//         }
//     }
//     return -1;
// }

// let arr1 = [0,1 , 0, 0, 1];
// let N1 = 5;

// console.log(findTransition(arr1, N1)); // Output: 3

// let arr2 = [0, 0, 0, 0];
// let N2 = 4;

// console.log(findTransition(arr2, N2)); // Output: -1  TC WILL BE O(LOG N)

// Wave Array

// Given a sorted array arr[] of distinct integers. Sort the array into a wave-like array(In Place).
// In other words, arrange the elements into a sequence such that arr[1] >= arr[2] <= arr[3] >= arr[4] <= arr[5].....

// If there are multiple solutions, find the lexicographically smallest one.

// Note:The given array is sorted in ascending order, and you don't need to return anything to make changes in the original array itself.

// Example 1:

// Input:
// n = 5
// arr[] = {1,2,3,4,5}
// Output: 2 1 4 3 5
// Explanation: Array elements after
// sorting it in wave form are
// 2 1 4 3 5.
// Example 2:

// Input:
// n = 6
// arr[] = {2,4,7,8,9,10}
// Output: 4 2 8 7 10 9
// Explanation: Array elements after
// sorting it in wave form are
// 4 2 8 7 10 9.
// Your Task:
// The task is to complete the function convertToWave(), which converts the given array to a wave array.

// Expected Time Complexity: O(n).
// Expected Auxiliary Space: O(1).

// Constraints:
// 1 ≤ n ≤ 106
// 0 ≤ arr[i] ≤107

// Naive Approach TC will be O(N)

// function convertToWave(arr){
//     for(let i=0;i<arr.length-1;i=i+2){
//         //swap arr[i] with arr[i+1]

//         // swap normal procedure lets say we have a, b so we can swap like,
//         // let temp=a;
//         // a=b;
//         // b=temp; follow the same swap template for this problem also ..

//         let temp=arr[i];
//         arr[i]=arr[i+1];
//         arr[i+1]=temp;

//     }
// }

// // Example usage:
// let arr1 = [1, 2, 3, 4, 5];
// let n1 = 5;
// convertToWave(arr1, n1);
// console.log(arr1); // Output: [2, 1, 4, 3, 5]

// let arr2 = [2, 4, 7, 8, 9, 10];
// let n2 = 6;
// convertToWave(arr2, n2);
// console.log(arr2); // Output: [4, 2, 8, 7, 10, 9]

// Row with max 1s
// Given a boolean 2D array of n x m dimensions where each row is sorted. Find the 0-based index of the first row that has the maximum number of 1's.

// Example 1:

// Input:
// N = 4 , M = 4
// Arr[][] = {{0, 1, 1, 1},
//            {0, 0, 1, 1},
//            {1, 1, 1, 1},
//            {0, 0, 0, 0}}
// Output: 2
// Explanation: Row 2 contains 4 1's (0-based
// indexing).

// Example 2:

// Input:
// N = 2, M = 2
// Arr[][] = {{0, 0}, {1, 1}}
// Output: 1
// Explanation: Row 1 contains 2 1's (0-based
// indexing).

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function rowWithMax1s() which takes the array of booleans arr[][], n and m as input parameters and returns the 0-based index of the first row that has the most number of 1s. If no such row exists, return -1.

// Expected Time Complexity: O(N+M)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 ≤ N, M ≤ 103
// 0 ≤ Arr[i][j] ≤ 1

// function maxRow(arr,n,m){
//     let maxCount=0,maxRow=-1;
//     for(let i=0;i<n;i++){
//         let count=0;
//         for(let j=0;j<m;j++){
//             if(arr[i][j]===1){
//                 count++;
//             }
//         }

//         if(maxCount<count){
//             maxCount=count;
//             maxRow=i;
//         }
//     }
//     return [maxRow,maxCount];
// }

// // Example usage:
// let arr1 = [
//     [0, 1, 1, 1],
//     [0, 0, 1, 1],
//     [1, 1, 1, 1],
//     [0, 0, 0, 0]
// ];
// let n1 = 4;
// let m1 = 4;
// console.log(maxRow(arr1, n1, m1)); // Output: 2

// let arr2 = [
//     [0, 0],
//     [1, 1]
// ];
// let n2 = 2;
// let m2 = 2;
// console.log(maxRow(arr2, n2, m2)); // Output: 1

// Frequencies of Limited Range Array Elements
// Given an array arr[] of N positive integers which can contain integers from 1 to P where elements can be repeated or can be absent from the array. Your task is to count the frequency of all numbers from 1 to N. Make in-place changes in arr[], such that arr[i] = frequency(i). Assume 1-based indexing.
// Note: The elements greater than N in the array can be ignored for counting and do modify the array in-place.

// Example 1:

// Input:
// N = 5
// arr[] = {2, 3, 2, 3, 5}
// P = 5
// Output:
// 0 2 2 0 1
// Explanation:
// Counting frequencies of each array element
// We have:
// 1 occurring 0 times.
// 2 occurring 2 times.
// 3 occurring 2 times.
// 4 occurring 0 times.
// 5 occurring 1 time.
// Example 2:

// Input:
// N = 4
// arr[] = {3,3,3,3}
// P = 3
// Output:
// 0 0 4 0
// Explanation:
// Counting frequencies of each array element
// We have:
// 1 occurring 0 times.
// 2 occurring 0 times.
// 3 occurring 4 times.
// 4 occurring 0 times.
// Example 3:

// Input:
// N = 2
// arr[] = {8,9}
// P = 9
// Output:
// 0 0
// Explanation:
// Counting frequencies of each array element
// We have:
// 1 occurring 0 times.
// 2 occurring 0 times.
// Since here P=9, but there are no 9th Index present so can't count the value.
// Your Task:
// You don't need to read input or print anything. Complete the function frequencyCount() that takes the array arr, and integers n, and p as input parameters and modify the array in-place to denote the frequency count of each element from 1 to N.

// Expected time complexity: O(N)
// Expected auxiliay space: O(1)

// Constraints:
// 1 ≤ N ≤ 105
// 1 ≤ P ≤ 4*104
// 1 <= arr[i] <= P

// function frequencyCount(arr, n, p) {
//     let frequencyMap = new Map();

//     // Step 1: Count frequencies and store in frequencyMap
//     for (let i = 0; i < n; i++) {
//         if (arr[i] <= n) {
//             if (frequencyMap.has(arr[i])) {
//                 frequencyMap.set(arr[i], frequencyMap.get(arr[i]) + 1);
//             } else {
//                 frequencyMap.set(arr[i], 1);
//             }
//         }
//     }

//     // Step 2: Update arr[] with frequency counts
//     for (let i = 0; i < n; i++) {
//         arr[i] = frequencyMap.has(i + 1) ? frequencyMap.get(i + 1) : 0;
//     }
// }

// let arr = [2, 3, 2, 3, 5];
// let n = 5;
// let p = 5;

// frequencyCount(arr, n, p);
// console.log(arr); // Output: [0, 2, 2, 0, 1]

// Merge Without Extra Space
// Given two sorted arrays arr1[] and arr2[] of sizes n and m in non-decreasing order. Merge them in sorted order without using any extra space. Modify arr1 so that it contains the first N elements and modify arr2 so that it contains the last M elements.

// Example 1:

// Input:
// n = 4, arr1[] = [1 3 5 7]
// m = 5, arr2[] = [0 2 6 8 9]
// Output:
// arr1[] = [0 1 2 3]
// arr2[] = [5 6 7 8 9]
// Explanation:
// After merging the two
// non-decreasing arrays, we get,
// 0 1 2 3 5 6 7 8 9.
// Example 2:

// Input:
// n = 2, arr1[] = [10 12]
// m = 3, arr2[] = [5 18 20]
// Output:
// arr1[] = [5 10]
// arr2[] = [12 18 20]
// Explanation:
// After merging two sorted arrays
// we get 5 10 12 18 20.
// Your Task:
// You don't need to read input or print anything. You only need to complete the function merge() that takes arr1, arr2, n and m as input parameters and modifies them in-place so that they look like the sorted merged array when concatenated.

// Expected Time Complexity:  O((n+m) log(n+m))
// Expected Auxilliary Space: O(1)

// Constraints:
// 1 <= n, m <= 105
// 0 <= arr1i, arr2i <= 107

// function mergeSort(arr1, arr2, n, m) {
//     while (n > 0 && m > 0) {
//       if (arr1[n - 1] > arr2[m - 1]) {
//         arr1[n + m - 1] = arr1[n - 1];
//         n--;
//       } else {
//         arr1[n + m - 1] = arr2[m - 1];
//         m--;
//       }
//     }

//     while (m > 0) {
//       arr1[n + m - 1] = arr2[m - 1];
//       m--;
//     }
//   }

//   // Given input
//   let n = 4;
//   let arr1 = [1, 3, 5, 7];
//   let m = 5;
//   let arr2 = [0, 2, 6, 8, 9];

//   mergeSort(arr1, arr2, n, m);

//   console.log("arr1[] =", arr1); // Output: [0, 1, 2, 3]
//   console.log("arr2[] =", arr2); // Output: [5, 6, 7, 8, 9]

// Subarray with 0 sum
// Given an array of integers. Find if there is a subarray (of size at-least one) with 0 sum. You just need to return true/false depending upon whether there is a subarray present with 0-sum or not. Printing will be taken care by the driver code.

// Example 1:

// Input:
// n = 5
// arr = {4,2,-3,1,6}
// Output:
// Yes
// Explanation:
// 2, -3, 1 is the subarray with sum 0.
// Example 2:

// Input:
// n = 5
// arr = {4,2,0,1,6}
// Output:
// Yes
// Explanation:
// 0 is one of the element in the array so there exist a subarray with sum 0.
// Your Task:
// You only need to complete the function subArrayExists() that takes array and n as parameters and returns true or false.

// Expected Time Complexity: O(n).
// Expected Auxiliary Space: O(n).

// Constraints:
// 1 <= n <= 104
// -105 <= a[i] <= 105

// function subArray(arr){
//     let currentSum=0;
//     let set=new Set();

//     for(let i=0;i<arr.length;i++){
//         currentSum+=arr[i];

// if(currentSum===0 || set.has(currentSum)){
//     return true;
// }

// set.add(currentSum);
//     }
//     return false;
// }

//  let n = 5
// let arr = [4,2,-3,1,6]
// console.log(subArray(arr));

// Given an array Arr of N positive integers and another number X. Determine whether or not there exist two elements in Arr whose sum is exactly X.

// Example 1:

// Input:
// N = 6, X = 16
// Arr[] = {1, 4, 45, 6, 10, 8}
// Output: Yes
// Explanation: Arr[3] + Arr[4] = 6 + 10 = 16

// function findPairWithSumX(arr, target) {
//     arr.sort((a, b) => a - b);

//     let left = 0,
//         right = arr.length - 1;

//     while (left < right) {
//         let sum = arr[left] + arr[right];
//         if (sum === target) {
//             return true;
//         } else if (sum < target) {
//             left++;
//         } else {
//             right--;
//         }
//     }
//     return false;
// }

// let arr = [1, 4, 45, 6, 10, 8];
// let target = 16;
// console.log(findPairWithSumX(arr, target)); // Output: Yes

// validate  an IP address

// Validate an IP Address
// Write a program to Validate an IPv4 Address.
// According to Wikipedia, IPv4 addresses are canonically represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255, separated by dots, e.g., 172.16.254.1 .
// A valid IPv4 Address is of the form x1.x2.x3.x4 where 0 <= (x1, x2, x3, x4) <= 255.
// Thus, we can write the generalized form of an IPv4 address as (0-255).(0-255).(0-255).(0-255).
// Note: Here we are considering numbers only from 0 to 255 and any additional leading zeroes will be considered invalid.

// Your task is to complete the function isValid which returns 1 if the given IPv4 address is valid else returns 0. The function takes the IPv4 address as the only argument in the form of string.

// Example 1:

// Input:
// IPv4 address = 222.111.111.111
// Output: 1
// Explanation: Here, the IPv4 address is as
// per the criteria mentioned and also all
// four decimal numbers lies in the mentioned
// range.

// Example 2:

// Input:
// IPv4 address = 5555..555
// Output: 0
// Explanation: 5555..555 is not a valid
// IPv4 address, as the middle two portions
// are missing.
// Your Task:
// Complete the function isValid() which takes the address in the form of string s as an input parameter and returns 1 if this is a valid address otherwise returns 0.

// Expected Time Complexity: O(N), N = length of the string.
// Expected Auxiliary Space: O(1)

// Constraints:
// 1<=length of string <=50

// Note: The Input/Output format and Example given are used for the system's internal purpose, and should be used by a user for Expected Output only. As it is a function problem, hence a user should not read any input from stdin/console. The task is to complete the function specified, and not to write the full code.

// function isValid(s) {
//     // Split the string by dot ('.') delimiter
//     const parts = s.split('.');

//     // Check if there are exactly 4 parts
//     if (parts.length !== 4) {
//         return 0;
//     }

//     for (let part of parts) {
//         // Check if each part is non-empty and consists of digits
//         if (!/^\d+$/.test(part)) {
//             return 0;
//         }

//         // Check for leading zeros in each part
//         if (part.length > 1 && part[0] === '0') {
//             return 0;
//         }

//         // Check if each part is in the range of 0 to 255
//         if (!(parseInt(part) >= 0 && parseInt(part) <= 255)) {
//             return 0;
//         }
//     }

//     return 1;
// }

// // Example usage:
// const ipv4_address = "222.111.111.111";
// console.log(isValid(ipv4_address));  // Output: 1

// const ipv4_address_invalid = "5555..555";
// console.log(isValid(ipv4_address_invalid));  // Output: 0

// MaxIndex Difference
// Given an array arr[] of n non-negative integers. The task is to find the maximum of j - i (i<=j) subjected to the constraint of arr[i] <= arr[j].

// Example 1:

// Input:
// n = 9
// arr[] = {34, 8, 10, 3, 2, 80, 30, 33, 1}
// Output:
// 6
// Explanation:
// In the given array arr[1] < arr[7]  satisfying
// the required condition (arr[i] <= arr[j])  thus
// giving the maximum difference of j - i which is
// 6(7-1).
// Example 2:

// Input:
// N = 2
// arr[] = {18, 17}
// Output:
// 0
// Explanation:
// We can either take i and j as 0 and 0
// or we cantake 1 and 1 both give the same result 0.
// Your Task:
// Complete the function maxIndexDiff() which takes array arr and size n, as input parameters and returns an integer representing the answer. You don't have to print answer or take inputs.

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(N)

// Constraints:
// 1 ≤ N ≤ 106
// 0 ≤ Arr[i] ≤ 109

// function maxIndexDiff(arr){
//     let maxDiff=0;

//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]<=arr[j]){
//                 maxDiff=Math.max(maxDiff,j-i);
//             }
//         }
//     }
//     return maxDiff;
// }

// // Example usage:
// const arr1 = [34, 8, 10, 3, 2, 80, 30, 33, 1];
// // const n1 = 9;

// console.log(maxIndexDiff(arr1)); // Output: 6

// function lenOfLongSubarr(A, n, K) {
//     let maxLength = 0;
//     let currSum = 0;
//     // let sumMap = new Map(); // or use an object {}

//     for (let right = 0, left = 0; right < n; right++) {
//         currSum += A[right];

//         while (currSum > K) {
//             currSum -= A[left];
//             left++;
//         }

//         if (currSum === K) {
//             maxLength = Math.max(maxLength, right - left + 1);
//         }
//     }

//     return maxLength;
// }

// // Example usage:
// const arr1 = [10, 5, 2, 7, 1, 9];
// const n1 = 6;
// const K1 = 15;

// console.log(lenOfLongSubarr(arr1, n1, K1)); // Output: 4

// Check if string is rotated by two places
// Given two strings a and b. The task is to find if the string 'b' can be obtained by rotating (in any direction) string 'a' by exactly 2 places.

// Example 1:

// Input:
// a = amazon
// b = azonam
// Output:
// 1
// Explanation:
// amazon can be rotated anti-clockwise by two places, which will make it as azonam.
// Example 2:

// Input:
// a = geeksforgeeks
// b = geeksgeeksfor
// Output:
// 0
// Explanation:
// If we rotate geeksforgeeks by two place in any direction, we won't get geeksgeeksfor.
// Your Task:
// The task is to complete the function isRotated() which takes two strings as input parameters and checks if given strings can be formed by rotations. The function returns true if string 1 can be obtained by rotating string 2 by two places, else it returns false.

// Expected Time Complexity: O(N).
// Expected Auxilary Complexity: O(N).
// Challenge: Try doing it in O(1) space complexity.

// Constraints:
// 1 ≤ length of a, b ≤ 105

// function isRotated(a, b) {
//     if (a.length !== b.length) {
//         return false; // If lengths are different, return false
//     }

//     // Function to rotate string 'a' by 2 places
//     // function rotateString(str) {
//     //     return str.slice(-2) + str.slice(0, -2); // Rotate string by 2 places
//     // }

//     // Check if rotating a by 2 places matches string b
//     const rotatedClockwise = a.slice(-2) + a.slice(0, -2);
//     const rotatedAntiClockwise = a.slice(2) + a.slice(0, 2);

//     return rotatedClockwise === b || rotatedAntiClockwise === b;
// }

// // Example usage:
// const a1 = "amazon";
// const b1 = "azonam";

// console.log(isRotated(a1, b1)); // Output: true

// const a2 = "geeksforgeeks";
// const b2 = "geeksgeeksfor";

// console.log(isRotated(a2, b2)); // Output: false

// MULTIIPLE TWO STRINGS GIVEN AS NUMBERS

// function multipleStrings(str1,str2){
//     return typeof((parseInt(str1)*parseInt(str2)).toString());

// }
// let str1='003';
// let str2='024';
// console.log(multipleStrings(str1,str2));

//FIND  FIRST NON REPEATING CHARACTER

// function findRepeating(str){
//     let map=new Map();

//     for(let keys of str){
//         if(map.has(keys)){
//             map.set(keys,map.get(keys)+1)
//         }
//         else{
//             map.set(keys,1)
//         }
//     }
//     console.log(map)
//     for(let [keys,values] of map){
//         if(values===1){
//             return keys;
//         }
//     }
//     return -1;
// }

// let str='hello';
// console.log(findRepeating(str))

//K-th element of two Arrays

// K-th element of two Arrays
// Given two arrays arr1 and arr2 of size N and M respectively and an element K. The task is to find the element that would be at the kth position of the final sorted array.

// Example 1:

// Input:
// arr1[] = {2, 3, 6, 7, 9}
// arr2[] = {1, 4, 8, 10}
// k = 5
// Output:
// 6
// Explanation:
// The final sorted array would be -
// 1, 2, 3, 4, 6, 7, 8, 9, 10
// The 5th element of this array is 6.
// Example 2:
// Input:
// arr1[] = {100, 112, 256, 349, 770}
// arr2[] = {72, 86, 113, 119, 265, 445, 892}
// k = 7
// Output:
// 256
// Explanation:
// Final sorted array is - 72, 86, 100, 112,
// 113, 119, 256, 265, 349, 445, 770, 892
// 7th element of this array is 256.

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function kthElement() which takes the arrays arr1[], arr2[], its size N and M respectively and an integer K as inputs and returns the element at the Kth position.

// Expected Time Complexity: O(Log(N) + Log(M))
// Expected Auxiliary Space: O(Log (N))

// Constraints:
// 1 <= N, M <= 106
// 0 <= arr1i, arr2i < INT_MAX
// 1 <= K <= N+M

// function kthElement(arr1, arr2, k) {
//   let i = 0,
//     j = 0,
//     n = arr1.length,
//     m = arr2.length,
//     emp = [];

//   while (i < n && j < m) {
//     if (arr1[i] < arr2[j]) {
//       emp.push(arr1[i]);
//       i++;
//     } else {
//       emp.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < n) {
//     emp.push(arr1[i]);
//     i++;
//   }

//   while (j < m) {
//     emp.push(arr2[j]);
//     j++;
//   }

//   return emp[k - 1]; // Adjust index to fetch kth element (1-based)  TC WILL BE  HERE O(N+M)
// }

//METHOD 2

// function kthElement(arr1,arr2,k){
//     let concatenated=arr1.concat(arr2);
//     let sorted=concatenated.sort((a,b)=>a-b);
//     return sorted[k-1]
// }
// let arr1 = [2, 3, 6, 7, 9];
// let arr2 = [1, 4, 8, 10];
// console.log(kthElement(arr1, arr2, 5)); // Output: 6 TC WILL BE O((n + m) log(n + m))

// Floor in a Sorted Array
// Given a sorted array arr[] of size N without duplicates, and given a value x. Floor of x is defined as the largest element K in arr[] such that K is smaller than or equal to x. Find the index of K(0-based indexing).

// Example 1:

// Input:
// N = 7, x = 0
// arr[] = {1,2,8,10,11,12,19}
// Output: -1
// Explanation: No element less
// than 0 is found. So output
// is "-1".
// Example 2:

// Input:
// N = 7, x = 5
// arr[] = {1,2,8,10,11,12,19}
// Output: 1
// Explanation: Largest Number less than 5 is
// 2 (i.e K = 2), whose index is 1(0-based
// indexing).
// Your Task:
// The task is to complete the function findFloor() which returns an integer denoting the index value of K or return -1 if there isn't any such number.

// Expected Time Complexity: O(log N).
// Expected Auxiliary Space: O(1).

// Constraints:
// 1 ≤ N ≤ 107
// 1 ≤ arr[i] ≤ 1018
// 0 ≤ X ≤ arr[n-1]

// function floorInSortedArray(arr,x){
// let emp=[];
// let indexOfMax;
//     for(let nums of arr){
//         if(nums<x){
//             emp.push(nums)
//         }
//         // return -1;
//     }
//     indexOfMax=Math.max(...emp);
//     return emp.indexOf(indexOfMax);
// }
// let arr=[1,2,8,10,11,12,19];
// let x=5;
// console.log(floorInSortedArray(arr,x));  METHOD 1 EDGE CASES WONT PASS HAS EXTRA SPACE AND TIME COMPLEXITY

// METHOD 2 EFFICIENT METHOD LESS COMPLEXITY WITH TC WILL BE  O(LOG N)

// function findFloor(arr, x) {
//     let low = 0;
//     let high = arr.length - 1;
//     let floorIndex = -1;

//     while (low <= high) {
//       let mid = Math.floor((low + high) / 2);

//       if (arr[mid] === x) {
//         return mid;
//       } else if (arr[mid] < x) {
//         floorIndex = mid; // Update floorIndex
//         low = mid + 1;
//       } else {
//         high = mid - 1;
//       }
//     }

//     return floorIndex;
//   }

//   // Test cases
//   let arr = [1, 2, 8, 10, 11, 12, 19];
//   let x = 0;
//   console.log(findFloor(arr, x)); // Output: -1

//   x = 5;
//   console.log(findFloor(arr, x)); // Output: 1

////////////////////////////////////////////////////////////////////////////////

// Count the triplets
// Given an array of distinct integers. The task is to count all the triplets such that sum of two elements equals the third element.

// Example 1:

// Input:
// N = 4
// arr[] = {1, 5, 3, 2}
// Output: 2
// Explanation: There are 2 triplets:
//  1 + 2 = 3 and 3 +2 = 5

// Example 2:

// Input:
// N = 3
// arr[] = {2, 3, 4}
// Output: 0
// Explanation: No such triplet exits
// Your Task:
// You don't need to read input or print anything. Your task is to complete the function countTriplet() which takes the array arr[] and N as inputs and returns the triplet count

// Expected Time Complexity: O(N2)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 ≤ N ≤ 103
// 1 ≤ arr[i] ≤ 105

// function countTriplets(arr) {
//     arr.sort((a, b) => a - b); // Sorting the array to use two-pointer technique
//     let count = 0;

//     for (let i = arr.length - 1; i >= 0; i--) {
//       let left = 0;
//       let right = i - 1;

//       while (left < right) {
//         if (arr[left] + arr[right] === arr[i]) {
//           count++;
//           left++;
//           right--;
//         } else if (arr[left] + arr[right] < arr[i]) {
//           left++;
//         } else {
//           right--;
//         }
//       }
//     }

//     return count;
//   }

//   let arr1 = [1, 5, 3, 2];
//   let arr2 = [4, 5, 1, 9,10];
//   let arr3 = [2, 5, 7, 2,9,1,3,6];
//   console.log(countTriplets(arr1)); // Output: 2
//   console.log(countTriplets(arr2));
//   console.log(countTriplets(arr3));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Two Pointers Techniques and Problems with templates
// Two pointers is really an easy and effective technique that is typically used for searching pairs in a sorted array.

// PROBLEM 1 :
// Given a sorted array A (sorted in ascending order), having N integers, find if there exists any pair of elements (A[i], A[j]) such that their sum is equal to X.

// function findPair(arr,x){
//     let left=0,right=arr.length-1;
//     while(left<right){
//         if(arr[left]+arr[right] === x){
//             return [arr[left],arr[right]];
//         }
//         else if((arr[left]+arr[right] ) <x){
//             left++;
//         }
//         else{
//             right--;
//         }
//     }
//     return -1;
// }

// console.log(findPair([10, 20, 35, 50, 75, 80],5))
// NOTE : ARRAY ALREADY SORTED SO NO NEED OF SORTING HERE , S0 TC WILL BE O(N) AND SC WILL BE O(1)

// PROBLEM 2 :

// Find all triplets with zero sum
// Given an array of distinct elements. The task is to find triplets in the array whose sum is zero.

// Examples :

// Input: arr[] = {0, -1, 2, -3, 1}
// Output: (0 -1 1), (2 -3 1)
// Explanation: The triplets with zero sum are 0 + -1 + 1 = 0 and 2 + -3 + 1 = 0

// Input: arr[] = {1, -2, 1, 0, 5}
// Output: 1 -2  1
// Explanation: The triplets with zero sum is 1 + -2 + 1 = 0

// function allTripletsWithZeroSum(arr) {
//     // conditions i < n, i < n - 1, i < n - 2 for Naive Approach
//     arr.sort((a, b) => a - b);
//     const result = [];
//     for (let i = 0; i < arr.length - 2; i++) {
//         let left = i + 1;
//         let right = arr.length - 1;
//         while (left < right) {
//             if ((arr[i] + arr[left] + arr[right]) === 0) {
//                 result.push([arr[i], arr[left], arr[right]]);
//                 left++;
//                 right--;
//                 // To avoid duplicate triplets with the same numbers
//                 while (left < right && arr[left] === arr[left - 1]) {
//                     left++;
//                 }
//                 while (left < right && arr[right] === arr[right + 1]) {
//                     right--;
//                 }
//             } else if ((arr[i] + arr[left] + arr[right]) < 0) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }
//     return result.length > 0 ? result : -1;
// }

// let arr = [0, -1, 2, -3, 1];
// console.log(allTripletsWithZeroSum(arr));

//PROBLEM 3 :

// Triplet Sum in Array (3sum)
// Given an array arr[] of size n and an integer X. Find if there’s a triplet in the array which sums up to the given integer X.

// Examples:

// Input: array = {12, 3, 4, 1, 6, 9}, sum = 24;
// Output: 12, 3, 9
// Explanation: There is a triplet (12, 3 and 9) present
// in the array whose sum is 24.

// Input: array = {1, 2, 3, 4, 5}, sum = 9
// Output: 5, 3, 1
// Explanation: There is a triplet (5, 3 and 1) present
// in the array whose sum is 9.

// function findTriplet(arr,sum){
//     // naive Approach // i=0,i<n-2 and j=i+1,j<n-1  and k=j+1,k<n

//     arr.sort((a,b)=>a-b);

//     for(let i=0;i<arr.length-2;i++){
//         let left=i+1 , right = arr.length-1;
//         while(left<right){
//             if((arr[i]+arr[left]+arr[right] )=== sum){
//                 return [arr[i],arr[left],arr[right]];
//             }
//             else if((arr[i]+arr[left]+arr[right] ) < sum){
//                 left++;
//             }
//             else {
//                 right--;
//             }
//         }
//     }
//     return -1;
// }

// let arr=[12, 3, 4, 1, 6, 9];
// let sum=24;
// console.log(findTriplet(arr,sum))

// Find a triplet such that sum of two equals to third element
// Given an array of integers, you have to find three numbers such that the sum of two elements equals the third element.

// Examples:

// Input : {5, 32, 1, 7, 10, 50, 19, 21, 2}
// Output : 21, 2, 19

// Input : {5, 32, 1, 7, 10, 50, 19, 21, 0}
// Output : no such triplet exist

// Two Pointer technique :

// function findTriplet(arr) {
//     arr.sort((a, b) => a - b);
//     const result = [];

//     for (let i = arr.length - 1; i >= 0; i--) {
//         let left = 0;
//         let right = i - 1;

//         while (left < right) {
//             if (arr[left] + arr[right] === arr[i]) {
//                 result.push([arr[left], arr[right], arr[i]]);
//                 left++;
//                 right--;
//                 // To avoid duplicate triplets with the same numbers
//                 while (left < right && arr[left] === arr[left - 1]) {
//                     left++;
//                 }
//                 while (left < right && arr[right] === arr[right + 1]) {
//                     right--;
//                 }
//             } else if (arr[left] + arr[right] < arr[i]) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }

//     return result.length > 0 ? result : -1;
// }

// let arr = [5, 32, 1, 7, 10, 50, 19, 21, 2];
// console.log(findTriplet(arr));

// Find four elements that sum to a given value (4Sum) | Set 1 (n^3 solution)
// Given an array of integers, find all combination of four elements in the array whose sum is equal to a given value X.

// Example:

// Input: array = {10, 2, 3, 4, 5, 9, 7, 8}, X = 23
// Output: 3 5 7 8
// Explanation: Sum of output is equal to 23, i.e. 3 + 5 + 7 + 8 = 23.

// Input: array = {1, 2, 3, 4, 5, 9, 7, 8}, X = 16
// Output: 1 3 5 7
// Explanation: Sum of output is equal to 16, i.e. 1 + 3 + 5 + 7 = 16.

// function fourSum(arr,sum){
//     // naive Approach i=0,i<n-3 ; j=i+1,j<n-2 , k=j+1,k<n-1 , m=k+1,m<n
//     let  n=arr.length;

//     for(let i=0;i<n-3;i++){
//         for(let j=i+1;j<n-2;j++){
//             let left=j+1,right=n-1;
//             while(left<right){
//                 if((arr[i]+arr[j]+arr[left]+arr[right]) === sum){
//                     return [arr[i],arr[j],arr[left],arr[right]]
//                 }
//                 else if((arr[i]+arr[j]+arr[left]+arr[right]) < sum){
//                     left++;
//                 }
//                 else{
//                     right--;
//                 }
//             }
//         }
//     }
//     return -1;
// }

// let arr=[1, 2, 3, 4, 5, 9, 7, 8];
// let sum=23;
// console.log(fourSum(arr,sum))

// Find the closest pair from two sorted arrays
// Given two arrays arr1[0…m-1] and arr2[0..n-1], and a number x, the task is to find the pair arr1[i] + arr2[j] such that absolute value of (arr1[i] + arr2[j] – x) is minimum.

// Example:

// Input: arr1[] = {1, 4, 5, 7};
// arr2[] = {10, 20, 30, 40};
// x = 32
// Output: 1 and 30
// Input: arr1[] = {1, 4, 5, 7};
// arr2[] = {10, 20, 30, 40};
// x = 50
// Output: 7 and 40

// function printClosest(ar1, ar2, m, n, x) {
//   let left = 0,
//     right = n - 1;
//   let diff = Number.MAX_VALUE;
//   let resL, resR;

//   while (left < m && right >= 0) {
//     if (Math.abs((ar1[left] + ar2[right]) - x) < diff) {
//       resL = ar1[left];
//       resR = ar2[right];
//       diff = Math.abs((ar1[left] + ar2[right]) - x);
//     } else if ((ar1[left] + ar2[right]) < x) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return [resL, resR];
// }

// let ar1 = [1, 4, 5, 7];
// let ar2 = [10, 20, 30, 40];
// let m = ar1.length;
// let n = ar2.length;
// let x = 20;
// console.log(printClosest(ar1, ar2, m, n, x));

// Given a sorted array and a number x, find the pair in array whose sum is closest to x

// Given a sorted array and a number x, find a pair in an array whose sum is closest to x.

// Examples:

// Input: arr[] = {10, 22, 28, 29, 30, 40}, x = 54
// Output: 22 and 30

// Input: arr[] = {1, 3, 4, 7, 10}, x = 15
// Output: 4 and 10

// function closestPair(arr,x){
//     let left=0,right=arr.length-1;
//     let diff=Number.MAX_SAFE_INTEGER;
//     let resL,resR;

//     while(left<right){
//         if(Math.abs((arr[left]+arr[right])-x)<diff){
//             resL=arr[left];
//             resR=arr[right];
//             diff=Math.abs((arr[left]+arr[right])-x);
//         }
//         else if(arr[left]+arr[right] < x){
//             left++;
//         }
//         else{
//             right--;
//         }
//     }
//     return [resL,resR]
// }

// let arr=[1, 3, 4, 7, 10];
// let x=15;
// console.log(closestPair(arr,x))

////////////////////////////////////////////////////////////////////////////////////////////////

// Find the  Given number is Palindrome or not

// function findpalindrome(x){
//     if(x<=0){
//         return false ;
//     }
//     else if(x>0){
//         let originalX = x;
//         let rev=0;
//         while(x!==0){
//             let rem=x%10;
//             rev=rev*10+rem;
//             x=Math.floor(x/10);
//         }
//         return rev===originalX;
//     }

// }

// console.log(findpalindrome(256))

// let arr=[-2 ,1 ,-4, 5, 3]
// let max = Math.max(...arr);
// console.log(max);
// let min = Math.min(...arr);
// console.log(Math.abs(min));
// let result = max + min;
// console.log(result);

//////////////////// STRIVERS PROBLEM ///////////////////////////////

// Set Matrix Zero
// Problem Statement: Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.

// function setZeros(matrix) {
//     let rows=matrix.length;
//     let cols=matrix[0].length;
//     let rowToZero=new Set();
//     let colToZero=new Set();

//     for(let i=0;i<rows;i++){
//         for(let j=0;j<cols;j++){
//             if(matrix[i][j]===0){
//                 rowToZero.add(i);
//                 colToZero.add(j);
//             }
//         }
//     }

//     for(let row of rowToZero){
//         for(let j=0;j<cols;j++){
//             matrix[row][j]=0
//         }
//     }
//     for(let col of colToZero){
//         for(let i=0;i<rows;i++){
//             matrix[i][col]=0
//         }
//     }

//     return matrix

// }

// // Example usage:
// const matrix = [
//     [1, 2, 3],
//     [4, 0, 6],
//     [7, 8, 9]
//   ];

//   console.log(setZeros(matrix));

// PROBLEM 2 :

// Kadane’s Algorithm : Maximum Subarray Sum in an Array
// Problem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
// has the largest sum and returns its sum and prints the subarray.

// function maxSubarraySum(arr) {
//     let currentMax = arr[0];
//     let maxSum = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         currentMax = Math.max(arr[i], currentMax + arr[i]);
//         maxSum = Math.max(maxSum, currentMax);
//     }

//     return maxSum;
// }

// // Example usage:
// const arr = [5, 8, 9, 6, 6, 7, 2, 3];
// console.log(maxSubarraySum(arr)); // Outputting the maximum subarray sum

//Problem 3
// Sort an array of 0s, 1s and 2s
// Problem Statement: Given an array consisting of only 0s, 1s, and 2s. Write a program to in-place sort the array without using inbuilt sort functions. ( Expected: Single pass-O(N) and constant space)

// Method 1 : Simply sort the Array TC will be O(n log n) and sc will be o(1)
// Method 2 : Dutch National Flag low =0 , mid =0 , hight-n-1  if(mid===0) and mid===1 and mid===2 swap low mid and high accordingly that method

// PORBLEM 3 :
// Stock Buy And Sell
// Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Problem 4

// Rotate Image by 90 degree
// Problem Statement: Given a matrix, your task is to rotate the matrix 90 degrees clockwise and Anticlockwise
// function rotateMatrixAnticlockwise(matrix){
//     let n=matrix.length;
//      for(let i=0;i<n;i++){
//         for(let j=i;j<n;j++){
//             [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
//         }
//      }
//      matrix.reverse();
//      return matrix;
// }

// const matrix = [
//     [1, 2, 3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ];
// console.log(rotateMatrixAnticlockwise(matrix)) // Output is [
// //     [ 4, 8, 12, 16 ],
// //     [ 3, 7, 11, 15 ],
// //     [ 2, 6, 10, 14 ],
// //     [ 1, 5, 9, 13 ]
// //   ]

// function rotatedClockwise(matrix){
//     let n=matrix.length;

//     for(let i=0;i<n;i++){
//         for(let j=i;j<n;j++){
//             [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]];

//         }
//         matrix[i].reverse();
//     }
//     return matrix;
// }
// const matrix = [
//     [1, 2, 3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ];
// console.log(rotatedClockwise(matrix))
// // Output is [
//   [ 13, 9, 5, 1 ],
//   [ 14, 10, 6, 2 ],
//   [ 15, 11, 7, 3 ],
//   [ 16, 12, 8, 4 ]
// ]

// // Problem 5
// Merge Overlapping Sub-intervals
// Problem Statement: Given an array of intervals, merge all the overlapping intervals and return an array of non-overlapping intervals.
// Example 1:

// Input: intervals=[[1,3],[2,6],[8,10],[15,18]]

// Output: [[1,6],[8,10],[15,18]]

// Explanation: Since intervals [1,3] and [2,6] are overlapping we can merge them to form [1,6]
//  intervals.

// Example 2:

// Input: [[1,4],[4,5]]

// Output: [[1,5]]

// Explanation: Since intervals [1,4] and [4,5] are overlapping we can merge them to form [1,5].

// function mergeOverlappingIntervals(intervals){
//     let arr=intervals.sort((a,b)=>a[0]-b[0]);
//     let n=arr.length;
//     let ans=[];
//     let startA=arr[0][0];
//     let endA=arr[0][1];
//     for(let i=1;i<n;i++){
//         let startB=arr[i][0];
//         let endB=arr[i][1];

//         if(startB<=endA){
//             endA=Math.max(endA,endB)
//         }
//         else{
//             ans.push([startA,endA]);
//             startA=arr[i][0];
//             endA=arr[i][1];
//         }
//     }
//     ans.push([startA,endA])
//     return ans;

// }

// let intervals1=[[1,3],[2,6],[8,10],[15,18]];
// let intervals2=[[1,4],[4,5]];

// console.log(mergeOverlappingIntervals(intervals1));
// console.log(mergeOverlappingIntervals(intervals2));

// PROBLEM 6

// Merge two Sorted Arrays Without Extra Space
// Problem statement: Given two sorted arrays arr1[] and arr2[] of sizes n and m in non-decreasing order. Merge them in sorted order. Modify arr1 so that it contains the first N elements and modify arr2 so that it contains the last M elements.

// Examples
// Example 1:

// Input:
// n = 4, arr1[] = [1 4 8 10]
// m = 5, arr2[] = [2 3 9]

// Output:
// arr1[] = [1 2 3 4]
// arr2[] = [8 9 10]

// Explanation:
// After merging the two non-decreasing arrays, we get, 1,2,3,4,8,9,10.

// Example2:

// Input:
// n = 4, arr1[] = [1 3 5 7]
// m = 5, arr2[] = [0 2 6 8 9]

// Output:
// arr1[] = [0 1 2 3]
// arr2[] = [5 6 7 8 9]

// Explanation:
// After merging the two non-decreasing arrays, we get, 0 1 2 3 5 6 7 8 9.

// PROBLEM 7

// Find the duplicate in an array of N+1 integers
// Problem Statement: Given an array of N + 1 size, where each element is between 1 and N. Assuming there is only one duplicate number, your task is to find the duplicate number.

// Examples:

// Example 1:

// Input: arr=[1,3,4,2,2]

// Output: 2

// Explanation: Since 2 is the duplicate number the answer will be 2.

// Example 2:

// Input: [3,1,3,4,2]

// Output:3

// Explanation: Since 3 is the duplicate number the answer will be 3.

// // METHOD 1 : USING SET
// // function findDuplicates(arr){
// //     let set=new Set();
//     let duplicates=new Set();

//     for(let nums of arr){
//         if(set.has(nums)){
//             duplicates.add(nums)
//         }
//         else{
//             set.add(nums)
//         }
//     }
//     return Array.from(duplicates)
// }
// let arr=[3,1,3,4,2]
// console.log(findDuplicates(arr))

// METHOD 2
// USING NORMAL TRADITIONAL METHOD  FIRST OF ALL MAKING NEGATIVR IF UNIQUE  AND AGAIN IF FINDING NEGATIVE IT MEANS TAHT REPEATING ONE SO PUSH TO DUPLICATES
// function findDuplicates(arr){
//     let duplicates=[]
//     for(let i=0;i<arr.length;i++){
//         let index = Math.abs(arr[i]);
//         if(arr[index]<0){
//             duplicates.push(index)
//         }
//         else{
//             arr[index]=-arr[index]
//         }
//     }

//     return duplicates;
// }
// let arr=[3,1,3,4,2]
// console.log(findDuplicates(arr))

// PROBLEM 8 :

// FIND REPEATING AND MISSING NUMBER

// Find the repeating and missing numbers
// Problem Statement: You are given a read-only array of N integers with values also in the range [1, N] both inclusive. Each integer appears exactly once except A which appears twice and B which is missing. The task is to find the repeating and missing numbers A and B where A repeats twice and B is missing.

// Examples
// Example 1:
// Input Format:  array[] = {3,1,2,5,3}
// Result: {3,4)
// Explanation: A = 3 , B = 4
// Since 3 is appearing twice and 4 is missing

// Example 2:
// Input Format: array[] = {3,1,2,5,4,6,7,5}
// Result: {5,8)
// Explanation: A = 5 , B = 8
// Since 5 is appearing twice and 8 is missing

// function find(arr){
//     let map=new Map();
//     let missing=null;
//     let repeating=null;

//     for(let nums of arr){
//         if(map.has(nums)){
//             repeating=nums
//         }
//         else{
//             map.set(nums,true)
//         }
//     }

//    for(let i=1;i<arr.length+1;i++){
//     if(!map.has(i)){
//         missing=i;
//         break;
//     }
//    }

//    return [repeating,missing]
// }

// let arr=[3,1,2,5,4,6,7,5];
// console.log(find(arr))

// PROBLEM 9
// Count inversions in an array
// Problem Statement: Given an array of N integers, count the inversion of the array (using merge-sort).

// What is an inversion of an array? Definition: for all i & j < size of array, if i < j then you have to find pair (A[i],A[j]) such that A[j] < A[i].

// Examples
// Example 1:
// Input Format: N = 5, array[] = {1,2,3,4,5}
// Result: 0
// Explanation: we have a sorted array and the sorted array has 0 inversions as for i < j you will never find a pair such that A[j] < A[i]. More clear example: 2 has index 1 and 5 has index 4 now 1 < 5 but 2 < 5 so this is not an inversion.

// Example 2:
// Input Format: N = 5, array[] = {5,4,3,2,1}
// Result: 10
// Explanation: we have a reverse sorted array and we will get the maximum inversions as for i < j we will always find a pair such that A[j] < A[i]. Example: 5 has index 0 and 3 has index 2 now (5,3) pair is inversion as 0 < 2 and 5 > 3 which will satisfy out conditions and for reverse sorted array we will get maximum inversions and that is (n)*(n-1) / 2.For above given array there is 4 + 3 + 2 + 1 = 10 inversions.

// Example 3:
// Input Format: N = 5, array[] = {5,3,2,1,4}
// Result: 7
// Explanation: There are 7 pairs (5,1), (5,3), (5,2), (5,4),(3,2), (3,1), (2,1) and we have left 2 pairs (2,4) and (1,4) as both are not satisfy our condition.

// METHOD 1 : NAIVE APPROACH
// function countInversions(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }

// let arr=[1,2,3,4,5]
// console.log(countInversions(arr))

// PROBLEM 10

// Search in a sorted 2D matrix
// Problem Statement: You have been given a 2-D array ‘mat’ of size ‘N x M’ where ‘N’ and ‘M’ denote the number of rows and columns, respectively. The elements of each row are sorted in non-decreasing order. Moreover, the first element of a row is greater than the last element of the previous row (if it exists). You are given an integer ‘target’, and your task is to find if it exists in the given ‘mat’ or not.

// Examples
// Example 1:
// Input Format: N = 3, M = 4, target = 8,
// mat[] =
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// Result: true
// Explanation: The ‘target’  = 8 exists in the 'mat' at index (1, 3).

// Example 2:
// Input Format: N = 3, M = 3, target = 78,
// mat[] =
// 1 2 4
// 6 7 8
// 9 10 34
// Result: false
// Explanation: The ‘target' = 78 does not exist in the 'mat'. Therefore in the output, we see 'false'.
// // function findTarget(matrix,target){
// //     let row=matrix.length;
// //     let cols=matrix[0].length;
// //     for(let i=0;i<row;i++){
// //         for(let j=i;j<cols;j++){
// //             if(matrix[i][j]===target){
// //                 return true;
// //             }
// //         }
// //     }
// //     return false;
// // }

// // let mat = [
// //     [1, 2, 4],
// //     [6, 7, 8],
// //     [9, 10, 34]
// // ];

// // console.log(findTarget(mat,22))

// Length of Longest Substring without any Repeating Character
// Problem Statement: Given a String, find the length of longest substring without any repeating character.

// Examples:

// Example 1:

// Input: s = ”abcabcbb”

// Output: 3

// Explanation: The answer is abc with length of 3.

// Example 2:

// Input: s = ”bbbbb”

// Output: 1

// Explanation: The answer is b with length of 1 units.

// function substringWithoutRepeatingCharacter(arr){
//     let max=0;
//     for(let i=0;i<arr.length;i++){
//         let set=new Set();
//         let count=0;
//         for(let j=i+1;j<arr.length;j++){
//             if(!set.has(arr[j])){
//                 set.add(arr[j]);
//                 count++;
//                 max=Math.max(max,count);
//             }
//             else{
//                 break;
//             }
//         }
//     }
//     return max;
// }
// let arr='bbbbb';
// console.log(substringWithoutRepeatingCharacter(arr))

// Implement Pow(x,n) | X raised to the power N
// Problem Statement: Given a double x and integer n, calculate x raised to power n. Basically Implement pow(x, n).

// Examples:

// Example 1:

// Input: x = 2.00000, n = 10

// Output: 1024.00000

// Explanation: You need to calculate 2.00000 raised to 10 which gives ans 1024.00000

// Example 2:

// Input: x = 2.10000, n = 3

// Output: 9.26100

// Explanation: You need to calculate 2.10000 raised to 3 which gives ans 9.26100

// solution will be return Math.pow(x,n)

// Find the Majority Element that occurs more than N/2 times
// Problem Statement: Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array. You may consider that such an element always exists in the array.

// Examples
// Example 1:
// Input Format: N = 3, nums[] = {3,2,3}
// Result: 3
// Explanation: When we just count the occurrences of each number and compare with half of the size of the array, you will get 3 for the above solution.

// Example 2:
// Input Format:  N = 7, nums[] = {2,2,1,1,1,2,2}

// Result: 2

// Explanation: After counting the number of times each element appears and comparing it with half of array size, we get 2 as result.

// Example 3:
// Input Format:  N = 10, nums[] = {4,4,2,4,3,4,4,3,2,4}

// Result: 4 Solution : Use Map and count the frequencies and again iterate the map with their key,values if(values > n/2) return key

// Count Reverse Pairs
// Problem Statement: Given an array of numbers, you need to return the count of reverse pairs. Reverse Pairs are those pairs where i<j and arr[i]>2*arr[j].

// Examples
// Example 1:

// Input: N = 5, array[] = {1,3,2,3,1)

// Output: 2

// Explanation: The pairs are (3, 1) and (3, 1) as from both the pairs the condition arr[i] > 2*arr[j] is satisfied.

// Example 2:

// Input: N = 4, array[] = {3,2,1,4}

// Output: 1

// Explaination: There is only 1 pair  ( 3 , 1 ) that satisfy the condition arr[i] > 2*arr[j]

// function countPairs(a, n) {
//     // Count the number of pairs:
//     let cnt = 0;
//     for (let i = 0; i < n; i++) {
//       for (let j = i + 1; j < n; j++) {
//         if (a[i] > 2 * a[j]) cnt++;
//       }
//     }
//     return cnt;
//   }

// 2Sum Problem
// 4-Sum Problem
// Longest Consecutive Sequence
// Largest Subarray with K sum
// Count number of subarrays with given xor K
// Longest Substring without repeat

// Nth Root of a Number using Binary Search
// Problem Statement: Given two numbers N and M, find the Nth root of M. The nth root of a number M is defined as a number X when raised to the power N equals M. If the ‘nth root is not an integer, return -1.

// Examples
// Example 1:
// Input Format: N = 3, M = 27
// Result: 3
// Explanation: The cube root of 27 is equal to 3.

// Example 2:
// Input Format: N = 4, M = 69
// Result: -1
// Explanation: The 4th root of 69 does not exist. So, the answer is -1.

//     function check(n,m,mid){
//         let ans =1;

//         for(let i=1;i<=n;i++){
//             ans=ans*mid;
//             if(ans>m) return 2;
//         }
//         if(ans===m) return 1;
//         return 0;
//     }

//     function nthRootBinarySearch(n,m){
//         let low=0,high=m;

//         while(low<=high){
//             let mid=Math.floor((low+high)/2);
//             let midN=check(n,m,mid);

//             if(midN===1){
//                 return mid;
//             }
//             else if(midN===0){
//                 low=mid+1
//             }
//             else{
//                 high=mid-1;
//             }
//         }
//         return -1
//     }
//     let N = 3;
// let M = 27;
// let root = nthRootBinarySearch(N, M);
// console.log(`The ${N}th root of ${M} is:`, root);

// Search Single Element in a sorted array
// Problem Statement: Given an array of N integers. Every number in the array except one appears twice. Find the single number in the array.

// Search Element in a Rotated Sorted Array
// Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values) and a target value k. Now the array is rotated at some pivot point unknown to you. Find the index at which k is present and if k is not present return -1.

// Examples
// Example 1:
// Input Format: arr = [4,5,6,7,0,1,2,3], k = 0
// Result: 4
// Explanation: Here, the target is 0. We can see that 0 is present in the given rotated sorted array, nums. Thus, we get output as 4, which is the index at which 0 is present in the array.

// Example 2:
// Input Format: arr = [4,5,6,7,0,1,2], k = 3
// Result: -1
// Explanation: Here, the target is 3. Since 3 is not present in the given rotated sorted array. Thus, we get the output as -1.

// function searchTarget(arr, target) {
//     let low = 0,
//         high = arr.length - 1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//         if (arr[mid] === target) return mid;

//         if (arr[low] <= arr[mid]) {
//             if (arr[low] <= target && target < arr[mid]) {
//                 high = mid - 1;
//             } else {
//                 low = mid + 1;
//             }
//         } else {
//             if (arr[mid] < target && target <= arr[high]) {
//                 low = mid + 1;
//             } else {
//                 high = mid - 1;
//             }
//         }                            // NOTE :
// IN THIS PROBLEM ARRAY IS SORTED BUT ITS ROTATED SO WE CANT PERFORM
// DIRECT BINARY SEARCH IMMEDIATELY WE NEED TO MODIFY THE BINARY SEARCH ,
// // SO FIRST OF ALL FIND THE MID ONCE YOU FIND LOOK ON TO THE TWO HALFS RIGHT AND LEFT
//                                         IF RIGHT IS SORTED FIX MID AND ALSO IF RIGHT IS SORTED FIX MID ACCORDINGLY
// //     }
//     return -1;
// }

// // let arr = [4, 5, 6, 7, 0, 1, 2, 3];
// // let target = 66;
// console.log(searchTarget(arr, target));

// Median of Two Sorted Arrays of different sizes
// Problem Statement: Given two sorted arrays arr1 and arr2 of size m and n respectively, return the median of the two sorted arrays. The median is defined as the middle value of a sorted list of numbers. In case the length of the list is even, the median is the average of the two middle elements.

// Examples
// Example 1:
// Input Format: n1 = 3, arr1[] = {2,4,6}, n2 = 3, arr2[] = {1,3,5}
// Result: 3.5
// Explanation: The array after merging 'a' and 'b' will be { 1, 2, 3, 4, 5, 6 }. As the length of the merged list is even, the median is the average of the two middle elements. Here two medians are 3 and 4. So the median will be the average of 3 and 4, which is 3.5.

// Example 2:
// Input Format: n1 = 3, arr1[] = {2,4,6}, n2 = 2, arr2[] = {1,3}
// Result: 3
// Explanation: The array after merging 'a' and 'b' will be { 1, 2, 3, 4, 6 }. The median is simply 3.

// function medianOfTwoSortedArrays(arr1, arr2) {
//     let combined = [];
//     let n1 = arr1.length;
//     let n2 = arr2.length;
//     let i = 0, j = 0;

//     while (i < n1 && j < n2) {
//         if (arr1[i] < arr2[j]) {
//             combined.push(arr1[i]);
//             i++;
//         } else {
//             combined.push(arr2[j]);
//             j++;
//         }
//     }

//     while (i < n1) {
//         combined.push(arr1[i]);
//         i++;
//     }

//     while (j < n2) {
//         combined.push(arr2[j]);
//         j++;
//     }

//     let totalLength = combined.length;
//     let medianIndex = Math.floor(totalLength / 2);

//     if (totalLength % 2 === 0) {
//         return (combined[medianIndex] + combined[medianIndex - 1]) / 2;
//     } else {
//         return combined[medianIndex];
//     }
// }

// let arr1 = [2, 4, 6];
// let arr2 = [1, 3];
// console.log(medianOfTwoSortedArrays(arr1, arr2));

// K-th Element of two sorted arrays
// Problem Statement: Given two sorted arrays of size m and n respectively, you are tasked with finding the element that would be at the kth position of the final sorted array.

// Examples :

// Input: m = 5
//        n = 4
//        array1 = [2,3,6,7,9]
//        array2 = [1,4,8,10]
//        k = 5

// Output:
//  6

// Explanation: Merging both arrays and sorted. Final array will be -
//  [1,2,3,4,6,7,8,9,10]
// We can see at k = 5 in the final array has 6.

// Input:
//  m = 1
//        n = 4
//        array1 = [0]
//        array2 = [1,4,8,10]
//        k = 2

// Output:
//  4

// Explanation:
//  Merging both arrays and sorted. Final array will be -
//  [1,4,8,10]
// We can see at k = 2 in the final array has 4

// SOLUTION : SORT THE ARRAY BY USING TC OF O (N) LIKE PREVIOUS PROBLEM AND THEN RETURN ''COMBINED[K]''

// PROBLEM :

//  Find the Index of the First Occurrence in a String
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

// function strStr(haystack, needle) {
//   if (needle === "") {
//     return 0;
//   }
//   for (let i = 0; i <= (haystack.length - needle.length); i++) {
//     if (haystack.slice(i, i + needle.length) === needle) {
//       return i;
//     }
//   }
//   return -1;
// }

// //This function, strStr, iterates through haystack using a loop. It checks substrings of the same length as needle starting from each index of haystack. If it finds a substring that matches needle, it returns the index; otherwise, it returns -1 if no match is found.
// // Test cases
// console.log(strStr("sadbutsad", "sad")); // Output: 0
// console.log(strStr("leetcode", "leeto")); // Output: -1// Test cases
// console.log(strStr("senthilkumar", "thil"));// Output: 3// Test cases
// console.log(strStr("senthilkumar", "mar"));// Output: 3// Test cases

// PROBLEM TO FIND MINIMUM CHARACTERS NEEEDED TO ADD AT THE BEGINNING TO MAKE STRING PALINDROME

// Minimum Characters required to make a String Palindromic

// Given a string A. The only operation allowed is to insert characters at the beginning of the string.
// Find how many minimum characters are needed to be inserted to make the string a palindrome string.

// function minInsertionsToPalindrome(A) {
//     // Helper function to check if a string is a palindrome
//     function isPalindrome(str) {
//         let left = 0;
//         let right = str.length - 1;
//         while (left < right) {
//             if (str[left] !== str[right]) {
//                 return false;
//             }
//             left++;
//             right--;
//         }
//         return true;
//     }

//     // Check if the string is already a palindrome
//     if (isPalindrome(A)) {
//         return 0;
//     }

//     // Function to find the longest palindromic prefix
//     function longestPalindromicPrefix(str) {
//         let prefix = '';
//         for (let i = 0; i < str.length; i++) {
//             if (isPalindrome(str.substring(0, i + 1))) {
//                 prefix = str.substring(0, i + 1);
//             }
//         }
//         return prefix;
//     }

//     // Find the longest palindromic prefix
//     const longestPrefix = longestPalindromicPrefix(A);

//     // Calculate the remaining characters needed to be inserted
//     const remainingCharacters = A.length - longestPrefix.length;

//     return remainingCharacters;
// }

// // Test cases
// console.log(minInsertionsToPalindrome("ABC")); // Output: 2
// console.log(minInsertionsToPalindrome("AACECAAAA")); // Output: 2

// COUNT AND SAY IMPORTANT PROBLEM

// Example 1:

// Input: n = 1
// Output: "1"
// Explanation: This is the base case.
// Example 2:

// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = say "1" = one 1 = "11"
// countAndSay(3) = say "11" = two 1's = "21"
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

// Link : https://leetcode.com/problems/count-and-say/

// function countAndSay(n){
//     if(n <= 0) return '';

//     let result = '1';
//     for(let i = 1; i < n; i++){
//         let count = 1;
//         let next = '';

//         for(let j = 0; j < result.length; j++){
//             if(result[j] === result[j + 1]){
//                 count++;
//             } else {
//                 next += count.toString() + result[j];
//                 count = 1;
//             }
//         }
//         result = next;
//     }
//     return result;
// }

// console.log(countAndSay(2));

// Compare Version Numbers
// Given two version numbers, version1 and version2, compare them.

// Version numbers consist of one or more revisions joined by a dot '.'. Each revision consists of digits and may contain leading zeros. Every revision contains at least one character. Revisions are 0-indexed from left to right, with the leftmost revision being revision 0, the next revision being revision 1, and so on. For example 2.5.33 and 0.1 are valid version numbers.

// To compare version numbers, compare their revisions in left-to-right order. Revisions are compared using their integer value ignoring any leading zeros. This means that revisions 1 and 001 are considered equal. If a version number does not specify a revision at an index, then treat the revision as 0. For example, version 1.0 is less than version 1.1 because their revision 0s are the same, but their revision 1s are 0 and 1 respectively, and 0 < 1.

// Return the following:

// If version1 < version2, return -1.
// If version1 > version2, return 1.
// Otherwise, return 0.

// Example 1:

// Input: version1 = "1.01", version2 = "1.001"
// Output: 0
// Explanation: Ignoring leading zeroes, both "01" and "001" represent the same integer "1".
// Example 2:

// Input: version1 = "1.0", version2 = "1.0.0"
// Output: 0
// Explanation: version1 does not specify revision 2, which means it is treated as "0".
// Example 3:

// Input: version1 = "0.1", version2 = "1.1"
// Output: -1
// Explanation: version1's revision 0 is "0", while version2's revision 0 is "1". 0 < 1, so version1 < version2.

// function compareVersion(version1, version2) {
//     const v1 = version1.split('.');
//     const v2 = version2.split('.');

//     const maxLength = Math.max(v1.length, v2.length);

//     for (let i = 0; i < maxLength; i++) {
//         const revision1 = parseInt(v1[i] || '0'); // Treat missing revisions as 0
//         const revision2 = parseInt(v2[i] || '0'); // Treat missing revisions as 0

//         if (revision1 > revision2) {
//             return 1;
//         } else if (revision1 < revision2) {
//             return -1;
//         }
//     }

//     return 0; // All revisions are equal
// }

// // Test cases
// console.log(compareVersion("1.01", "1.001")); // Output: 0
// console.log(compareVersion("1.0", "1.0.0")); // Output: 0
// console.log(compareVersion("0.1", "1.1")); // Output: -1

// PROBLEM : MAX PRODUCT SUBARRAY

// Maximum Product Subarray in an Array
// Problem Statement: Given an array that contains both negative and positive integers, find the maximum product subarray.

// function maxProductSubArray(arr){
//     let maxProduct = arr[0]; // Initialize maxProduct with the first element

//     for(let i = 0; i < arr.length; i++){
//         let product = 1;
//         for(let j = i; j < arr.length; j++){
//             product *= arr[j]; // Calculate product of the subarray from i to j

//             // Update maxProduct if the current product is larger
//             if(product > maxProduct){
//                 maxProduct = product;
//             }
//         }
//     }

//     return Math.abs(maxProduct);
// }

// let arr = [2,3,-2,4];
// console.log(maxProductSubArray(arr)); // Output: 6

// Program to generate Pascal’s Triangle
// Problem Statement: This problem has 3 variations. They are stated below:

// Variation 1: Given row number r and column number c. Print the element at position (r, c) in Pascal’s triangle.

// Variation 2: Given the row number n. Print the n-th row of Pascal’s triangle.

// Variation 3: Given the number of rows n. Print the first n rows of Pascal’s triangle.

// Example 1:
// Input Format: N = 5, r = 5, c = 3
// Result: 6 (for variation 1)
// 1 4 6 4 1 (for variation 2)

// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1    (for variation 3)

// Explanation: There are 5 rows in the output matrix. Each row is formed using the logic of Pascal’s triangle.

// Example 2:
// Input Format: N = 1, r = 1, c = 1
// Result: 1 (for variation 1)
//     1 (for variation 2)
//     1  (for variation 3)
// Explanation: The output matrix has only 1 row.

// function generatePascalsTriangle(rows) {
//     let triangle = [];

//     for (let i = 0; i < rows; i++) {
//       triangle[i] = [];
//       for (let j = 0; j <= i; j++) {
//         if (j === 0 || j === i) {
//           triangle[i][j] = 1;
//         } else {
//           triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
//         }
//       }
//     }

//     return triangle;
//   }

//   function printPascalsTriangle(triangle) {
//     for (let i = 0; i < triangle.length; i++) {
//       console.log(triangle[i].join(' '));
//     }
//   }

//   const numberOfRows = 5; // Change this value to generate Pascal's Triangle with different number of rows
//   const pascalsTriangle = generatePascalsTriangle(numberOfRows);
//   printPascalsTriangle(pascalsTriangle);

// function moveZeroes(nums) {
//     let count=0;
//     let emp=[];
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]===0){
//             count++;

//         }
//         else{
//             emp.push(nums[i])
//         }
//     }

//     for(let i=1;i<=count;i++){
//         emp.push("0")
//     }
//     return emp;
// }

// console.log(moveZeroes([8,9,0,5,0,4,7,0,6,0,4,7]));

// function sortArray(arr){
//     let n=arr.length;

//     for(let i=0;i<n-1;i++){
//         for(let j=i+1;j<n;j++){
//             if(arr[i]>arr[j]){
//                 let temp=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=temp
//             }
//         }
//     }
//     return arr;
// }

// const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
// const sortedArray = sortArray(unsortedArray);
// console.log(sortedArray); // Output will be [1, 3, 4, 5, 8]

// Factor Digit sum
// Problem Description
// Given a number n, write code to find the sum of digits in the factorial of the number.

// Input format
// First line contains an integer - n

// Output format
// Return a single digit representing sum of digits in the factorial of the number n.

// Sample Input 1
// 10

// Sample Output 1
// 27

// Explanation
// 10! = 3628800 = 3+6+2+8+8+0+0 = 27

// Constraints
// 1 <= n <= 50000

// function factorDigitSum(n){
//     let fac=BigInt(1);
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         fac*=BigInt(i)
//     }
//     let number = fac.toString();

//     for( let nums of number){
//         sum=sum+parseInt(nums)
//     }
//     return sum
// }

// console.log(factorDigitSum(10))

// Problem Description
// Given an integer find the number of divisors of that number and also print the sum of divisors.

// Input format
// An Integer N.

// Output format
// Print two space separated integers, first integer representing the number of divisors and second would be the sum of integers.

// Sample Input 1
// 4

// Sample Output 1
// 3 7

// Explanation
// The divisors of 4 are 1,2,4 and their sum is 7.

// Constraints
// 0 <= N <= 100

// function findDivisorsAndSum(n){
//     let emp=[];
//     for(let i=1;i<=n;i++){
//         if(n%i===0){
//             emp.push(i)
//         }
//     }
//     let ans1=emp.length;
//     let ans2=emp.reduce((ele,total)=>ele+total,0)
//     return [ans1,ans2].join(" ")
// }
// console.log(findDivisorsAndSum(4));

// FIND FIRST AND LAST INDEX OF GIVEN NUMBER IN AN ARRAY

// function firstAndLastOccurrences(arr, target) {
//     if (arr.length === 0) return [-1, -1];

//     function first() {
//       let left = 0,
//         right = arr.length - 1,
//         first = -1;

//       while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] >= target) {
//           if (arr[mid] === target) {
//             first = mid;
//           }
//           right = mid - 1;
//         } else {
//           left = mid + 1;
//         }
//       }
//       return first;
//     }

//     function last() {
//       let left = 0,
//         right = arr.length - 1,
//         last = -1;

//       while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] <= target) {
//           if (arr[mid] === target) {
//             last = mid;
//           }
//           left = mid + 1;
//         } else {
//           right = mid - 1;
//         }
//       }
//       return last;
//     }

//     const firstOccurrence = first();
//     const lastOccurrence = last();

//     return [firstOccurrence, lastOccurrence];
//   }

//   let arr = [5, 7, 7, 8, 8, 10];
//   let target = 158;
//   console.log(firstAndLastOccurrences(arr, target));

// function longestPrefix(strs){
//     let prefix=strs[0];

//     for(let i=1;i<strs.length;i++){
//         while(strs[i].indexOf(prefix)!==0){
//             prefix=prefix.substring(0,prefix.length-1)
//             if(prefix==='') return ''
//         }
//     }
//     return prefix
// }

// let strs=["flight","flow",'flower'];
// console.log(longestPrefix(strs));

// Spiral matrix

// function spiralMatrix(A){
//     let count=1;
//     let ans=new Array(A);
//     for(let i=0;i<A;i++){
//         ans[i]=new Array(A)
//     }

//     let left=0,right=A-1,top=0,bottom=A-1;

//     while(count<=A*A){
//         for(let i=left;i<=right;i++){
//             ans[top][i]=count;
//             count++
//         }
//         top++;

//         for(let i=top;i<=bottom;i++){
//             ans[i][right]=count;
//             count++;
//         }
//         right--;

//         for(let i=right;i>=left;i--){
//             ans[bottom][i]=count;
//             count++
//         }
//         bottom--;

//         for(let i=bottom;i>=top;i--){
//             ans[i][left]=count;
//             count++
//         }
//         left++

//     }
//     return ans
// }

// console.log(spiralMatrix(3));

// WAVE ARRAY ...

// function waveArray(arr){
//     let sortedArray=arr.sort((a,b)=>a-b);

//     for(let i=0;i<arr.length-1;i+=2){
//         let temp=arr[i];
//         arr[i]=arr[i+1];
//         arr[i+1]=temp;
//     }
//     return arr;
// }

// let array=[21,4,5,3,1,7];
// console.log(waveArray(array));

// IMPORTANT NOTE : FIRST CHECK ARRAY IS SORTED OR NOT , IF IS NOT SORTED THEN SORT THE ARRAY AND DO SWAP OPERATION WITH EVEN INDICES
// AND IF IT IS ALREADY SORTED THEN NO NEED OF SORTING SIMPLY SWAP THE ARRAY INDICES

// NTH ROOT OF M USING BINARY SEARCH

// function func(mid,n,m){
//     let ans=1;

//     for(let i=1;i<=n;i++){
//         ans=ans*mid;

//         if(ans>m) return 2;
//     }
//     if(ans===m) return 1;

//     return 0;
// }

// function nthRootBinarySearch(n,m){
//     let low=1,high=m;
//     while(low<=high){
//         let mid=Math.floor((low+high)/2);
//          let midN=func(mid,n,m);

//         if(midN===1){
//             return mid
//         }
//         else if(midN===0){
//             low=mid+1
//         }
//         else{
//             high=mid-1
//         }
//     }
//     return -1;
// }

// console.log( nthRootBinarySearch(2,64))

// function sortArray(arr){

//     let n=arr.length

//     for(let i=0;i<n-1;i++){
//         for(let j=i+1;j<n;j++){
//             if(arr[i]>arr[j]){
//                 let temp=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=temp;
//             }
//         }
//     }
//     return arr
// }

// let arr=[634, 134, 255, 12, 2, 1001, 90];
// console.log(sortArray(arr));

// Floor and ceil index in the sorted array

// FLOOR -> LARGEST VALUE SMALLER THAN GIVEN TARGET... EG : TARGET 15 , FLOOR MIGHT BE 13,14 IF WE HAVE IN ARRAY
// CEIL -> SMALLEST VALUE LARGER THAN THE GIVEN TARGET EG : TARGET 15 CEIL MIGHT BE 16,17 IF WE HAVE N THE AARRAY

// function ceilFloor(arr,target){

//     function ceiling(){
//         let low=0,high=arr.length-1;
//         let ceil=-1;

//         if(target>arr[high]) return -1;

//         while(low<=high){
//             let mid=Math.floor((low+high)/2);

//             if(arr[mid]===target){
//                 return mid
//             }
//             else if(target<arr[mid]){
//                 ceil=mid;
//                 high=mid-1
//             }
//             else{
//                 low=mid+1
//             }
//         }
//         return arr[ceil]
//     }

//     function flooring(){
//         let low=0,high=arr.length-1;
//         let floor=-1;

//         if(target < arr[low]) return -1
//         while(low<=high){
//             let mid=Math.floor((low+high)/2);

//             if(arr[mid]===target){
//                 return mid
//             }
//             else if(target>arr[mid]){
//                 floor=mid;
//                 low=mid+1
//             }
//             else{
//                 high=mid-1
//             }
//         }
//         return arr[floor]
//     }

// let ceilIndex=ceiling();
// let floorIndex=flooring();

// return [ceilIndex,floorIndex]
// }

// const arr = [2, 4, 6, 8, 10, 12, 14];
// const target = 1;
// console.log(ceilFloor(arr,target));

// function largestSubArraywithZeroSum(arr){
//     let sum=0;
//     let map=new Map()
//     let count=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];

//         if(sum===0){
//             count++;
//         }

//         if(map.has(arr[i])){
//             count=Math.max(count,i-map.get(arr[i]))
//         }
//         else{
//             map.set(arr[i],1)
//         }
//     }
//     return count;
// }

// STAR PATTERNS PROBLEMS :

// 1.Square Star Pattern in Javascript

// *****
// *****
// *****  => OUTPUT
// *****
// *****

// function starSquarePattern(n){
//     let string='';

//     for(let i=0;i<n;i++){
//         for(let j=0;j<n;j++){
//             string+='*'
//         }
//         string+='\n'
//     }
//     return string;
// }
// console.log(starSquarePattern(5));

// 2. Hollow Square Pattern
// *****
// *   *
// *   *
// *   *
// *****

// function hollowSquarePattern(n){
//     let string='';

//     for(let i=0;i<n;i++){
//         for(let j=0;j<n;j++){
//             if(i===0 || i===n-1){
//                 string+='*'
//             }
//             else if(j===0 || j===n-1){
//                 string+="*"
//             }
//             else{
//                 string+=' '
//             }
//         }
//         string+='\n'
//     }
//     return string;
// }

// console.log(hollowSquarePattern(5));

// 3. Right Triangle Pattern in Javascript
//     *
//    **
//   ***
//  ****
// *****

// function rightTrianglePattern(n) {
//     let string=''
//   for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < n - i; j++) {
//       string += " ";
//     }
//     for (let k = 0; k < i; k++) {
//       string += "*";
//     }
//     string += "\n";
//   }
//   return string;
// }
// console.log(rightTrianglePattern(5));

// 4. Left Triangle Pattern in Javascript
// *
// **
// ***
// ****
// *****

// function leftTriangle(n){
//     let string='';

//     for(let i=1;i<=n;i++){
//         for(let j=0;j<i;j++){
//             string+='*'
//         }
//         string+='\n'
//     }
//     return string;
// }

// console.log(leftTriangle(50));

// 5. Downward Triangle Star Pattern
// *****
// ****
// ***
// **
// *

// function downwardTriangle(n){
//     let string='';

//     for(let i=0;i<n;i++){
//         for(let j=0;j<n-i;j++){
//             string+='*'
//         }
//         string+='\n'
//     }
//     return string;
// }
// console.log(downwardTriangle(5));

// 6. Hollow Triangle Star Pattern
// *
// **
// * *
// *  *
// *   *
// ******

// function hollowTriangle(n){
//     let string='';

//     for(let i=1;i<=n;i++){
//         for(let j=0;j<i;j++){
//             if(i===n){
//                 string+='*'
//             }
//             else if(j===0 || j===i-1){
//                 string+="*"
//             }
//             else{
//                 string+=' '
//             }
//         }
       
//         string+='\n'
//     }
//     return string;
// }
// console.log(hollowTriangle(10));

// 7. Javascript Pyramid Pattern
//     *
//    ***
//   *****
//  *******
// *********


// function pyramid(n){
//     let string='';

//     for(let i=1;i<=n;i++){
//         for(let j=0;j<n-i;j++){
//             string+=" "
//         }
//         for(let k=0;k<(2*i)-1;k++){
//             string+='*'
//         }
//         string+='\n'
//     }
//     return string;
// }
// console.log(pyramid(10));

// 8. Reversed Pyramid Star Pattern

// *********
//  *******
//   *****
//    ***
//     *

// function reversePyramid(n){
//     let string='';

//     for(let i=0;i<n;i++){
//         for(let j=0;j<i;j++){
//             string+=' ';
//         }

//         for(let k=0;k<2*(n-i)-1;k++){
//             string+='*'
//         }
//         string+='\n'
//     }
//     return string;
// }

// console.log(reversePyramid(5));

//Hollow Pyramid

//    *
// * *
// *   *
// *     *
// *********

// function hollowPyramid(n){
//     let string='';

//     for(let i=1;i<=n;i++){
//         for(let j=0;j<n-i;j++){
//             string+=" "
//         }
//         for(let k=0;k<(2*i)-1;k++){
//             if(i===1 || i===n){
//                 string+='*'
//             }
//             else if(k===0 || k==2*i-2){
//                 string+='*'
//             }
//             else{
//                 string+=" "
//             }
//         }
//         string+='\n'
//     }
//     return string
// }
// console.log(hollowPyramid(5));


// ROMAN TO INTEGER

// function romanToInteger(roman){
//     let romanValues={
//         'I':1,
//         'V':5,
//         'X':10,
//         'L':50,
//         'C':100,
//         'D':500,
//         'M':1000
//     }
//     let result=0
//     for(let i=0;i<roman.length;i++){
//         let currentValue=romanValues[roman[i]];
//         let nextValue=romanValues[roman[i+1]];
//         if(nextValue && nextValue>currentValue){
//             result+=(nextValue-currentValue);
//             i++;
//         }
//         else{
//             result+=currentValue;
//         }
//     }
//     return result
// }
// console.log(romanToInteger('VCCC'));

// function integerToRoman(integer){
//     const values=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
//     const romans=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
//     let result="";
//     for(let i=0;i<values.length;i++){
//         if(integer>=values[i]){
//             result+=romans[i];
//             integer-=values[i]
//         }
//     }
//     return result;
// }
// console.log(integerToRoman(1500));

// Non-overlapping Intervals
// Medium
// 7.7K
// 207
// Companies
// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

 

// Example 1:

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
// Example 2:

// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
// Example 3:

// Input: intervals = [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

// function nonOverlapping(intervals) {
//     intervals.sort((a, b) => a[0] - b[0]);

//     let removeElement = 0;
//     let endA = intervals[0][1]; // Track the end of the first interval

//     for (let i = 1; i < intervals.length; i++) {
//         let startB = intervals[i][0];
//         let endB = intervals[i][1];

//         // Check for overlapping intervals
//         if (endA > startB) {
//             removeElement++;
//             endA = Math.min(endA, endB); // Update endA with the minimum end
//         } else {
//             endA = endB; // Update endA for non-overlapping interval
//         }
//     }

//     return removeElement;
// }

// let intervals = [[1,2],[1,2],[1,2]]
// console.log(nonOverlapping(intervals)); // Output: 1

// Climbing Stairs
// Easy
// 20.6K
// 715
// Companies
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// function climbingStairs(n){
//     let stairs=new Array(n+1).fill(0);

//     stairs[1]=1;
//     stairs[2]=2;

//     for(let i=3;i<=n;i++){
//         stairs[i]=stairs[i-1]+stairs[i-2]
//     }
//     return stairs[n]
// }
// console.log(climbingStairs(5));

//Insert new Interval

//  Insert Interval

// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

 

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 

// Constraints:

// 0 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 105
// intervals is sorted by starti in ascending order.
// newInterval.length == 2
// 0 <= start <= end <= 105

// function insertNewInterval(intervals,newIntervals){
//     intervals.sort((a,b)=>a[0]-b[0]);

//     let i=0;
//     let result=[];
   
// check out non overlapping once and push infront of emptyarray

//     while(i<intervals.length && intervals[i][1]<newIntervals[0]){
//         result.push(intervals[i]);
//         i++
//     }

// checkut overlapping one and insert it 

//     while(i<intervals.length && intervals[i][0]<=newIntervals[1]){
//         newIntervals[0]=Math.min(newIntervals[0],intervals[i][0]);
//         newIntervals[1]=Math.max(newIntervals[1],intervals[i][1]);
//         i++
//     }
//     result.push(newIntervals)


// checkout if we have remaining intervals and push at last to the empty array
//     while (i < intervals.length) {
//         result.push(intervals[i]);
//         i++;
//     }

//     return result;
// }

// let intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]]
// let newIntervals = [4, 8];

// console.log(insertNewInterval(intervals, newIntervals)); 