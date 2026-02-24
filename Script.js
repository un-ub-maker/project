* **Save as:** `style.css`

---

### 3. The "Brain" (`script.js`)
This is where the magic happens. This makes the buttons actually do something.
* **How to make it:** Create one last blank file.
* **The Code:**

```javascript
const btn = document.getElementById('main-btn');
const statusText = document.getElementById('status');

btn.addEventListener('click', () => {
    statusText.innerText = "Aura +1000. You're locked in.";
    btn.style.backgroundColor = "#ff0077";
});