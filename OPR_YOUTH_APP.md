Here is the comprehensive documentation for the **Rodrigues Planner** application. This document merges the high-level project purpose with a detailed technical breakdown of the currently implemented features, suitable for generating a website or project showcase.

***

# 📱 Rodrigues Planner – Project Documentation

## 1. Project Purpose & Vision
**"Empowering Rodriguan Youth Through Digital Discipline"**

The **Rodrigues Planner** is a flagship digital initiative by the **Organisation du Peuple Rodriguais (OPR)** designed to address the unique challenges faced by students and young professionals in Rodrigues.

### The Challenge
Rodriguan youth often struggle with:
*   **Time Management:** Lack of structure leading to academic stress.
*   **Digital Preparedness:** Uneven adoption of modern productivity tools.
*   **Discipline:** Difficulty maintaining consistent study habits.

### The Solution
More than just a calendar, this app is a **personal digital assistant** built specifically for the local context. It operates **offline-first** (essential for connectivity gaps) while offering modern cloud capabilities when connected. It bridges the gap between traditional schooling and digital literacy, fully localized with support for **Kreol Rodrige**.

---

## 2. High-Level Technical Overview

The application is a robust, cross-platform mobile solution built with **React Native** and **Expo**. It emphasizes reliability, user privacy, and accessibility.

*   **Architecture:** Offline-First (Local SQLite Database) with Cloud Sync (Supabase).
*   **Key Tech Stack:**
    *   **Frontend:** React Native (Expo SDK 54), React 19.
    *   **Storage:** SQLite (local relational DB), AsyncStorage (preferences), SecureStore (sensitive keys).
    *   **Backend Services:** Supabase (Remote Config, Sync, Feedback), OpenAI API (AI Features).
    *   **Localization:** [i18n](cci:7://file:///Users/davidtadediji/Documents/Workspace/opr-youth-app/src/i18n:0:0-0:0) with full support for English, French, and Kreol Rodrige.

---

## 3. Implemented Features

The application has evolved significantly beyond the original MVP, incorporating advanced multimedia and AI capabilities.

### 🏠 A. Smart Dashboard (Central Hub)
The dashboard serves as the daily command center for the user.
*   **Dynamic Greeting:** Personalized welcome based on the time of day.
*   **Daily Inspiration:** Fetches motivational quotes or study tips.
    *   *Feature:* Supports categorization and localization (e.g., specific quotes in Kreol).
*   **At-a-Glance Stats:** Real-time counters for "Due Today," "Upcoming," "Overdue" assignments, and "Total Notes."
*   **Daily Goals:** Automatically generates a checklist based on the day's pending assignments.
*   **Schedule Preview:** Shows the immediate next classes or events for the day.

### 📅 B. Timetable Management (Core)
Replaces the paper diary with a smart digital schedule.
*   **Smart Views:** Toggle between Daily and Weekly views.
*   **Class Details:** Stores Subject, Room, Teacher, and Time.
*   **Visual Coding:** Color-coded subjects for quick visual recognition.
*   **Conflict Handling:** Logic to detect and clean up overlapping schedules.

### 📚 C. Homework & Assignments
A dedicated planner to ensure no deadline is missed.
*   **Status Tracking:** Filter by "Due Today," "This Week," or "Overdue."
*   **Priority System:** Mark tasks as High, Medium, or Low priority.
*   **Reminders:** Automated push notifications for approaching due dates.

### 📝 D. Advanced Notes & Study Tools
Significantly expanded beyond simple text notes to support different learning styles.
*   **Rich Media Notes:** Create notes with text and images.
*   **🎙️ Audio Notes:**
    *   **Voice Recorder:** Integrated recording interface for capturing lectures or voice memos.
    *   **Audio Player:** Built-in playback for reviewing recorded notes.
*   **🤖 AI Study Assistant (Integration):**
    *   **AI Flashcards:** Generates study flashcards automatically from note content using OpenAI.
    *   **AI Summarization:** Creates concise summaries of long notes for quick review.
    *   *Security:* Uses secure storage for API keys.

### ⚙️ E. Settings & Personalization
Gives users full control over their experience.
*   **Localization:**
    *   Full UI translation: **English**, **Français**, **Kreol Rodrige**.
    *   Cultural adaptation (e.g., local currency/date formats).
*   **Notifications:** Granular control over:
    *   Class Reminders
    *   Assignment Deadlines
    *   Motivational Messages
    *   Study Tips
*   **Theme Engine:** Complete **Dark Mode** and **Light Mode** support.
*   **Data Sovereignty:**
    *   **Export/Import:** Users can backup their entire database to a file and restore it (useful for switching phones).
    *   **Clear Data:** One-tap privacy wipe.

### ☁️ F. Cloud Sync & Live Updates
While the app works offline, it intelligently connects when online.
*   **Remote Content Sync:** Automatically fetches new Motivational Quotes and FAQ items from Supabase without requiring an app store update.
*   **App Config:** Feature flags and maintenance mode can be controlled remotely.
*   **Feedback Loop:**
    *   **Crash Reporting:** Integrated Error Boundary that catches crashes.
    *   **User Feedback:** "Send Feedback" forms (triggered manually or by errors) send detailed reports to the dev team.

---

## 4. Why This Matters (The "Rodrigues" Advantage)

1.  **Local First:** Unlike generic planners, this app speaks the local language (**Kreol Rodrige**), making it approachable for all youth.
2.  **Digital Inclusion:** By including features like **Audio Notes** and **AI tools**, it democratizes access to advanced study technology for Rodriguan students.
3.  **Institutional Backing:** As an OPR initiative, it represents a concrete investment in the future electorate, moving beyond political promises to deliver a practical daily utility.