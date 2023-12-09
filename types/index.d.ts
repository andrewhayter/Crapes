```typescript
export interface Post {
  title: string;
  content: string;
  slug: string;
  date: string;
}

export interface Posts {
  [key: string]: Post;
}
```