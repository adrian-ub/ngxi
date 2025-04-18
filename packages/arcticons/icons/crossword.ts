import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrosswordIcon],svg[arcticons-crossword-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.885 15.173c4.472-.541 5.15 5.318.645 5.318c-1.972 0-5.636-1.705-7.14-1.705a1.396 1.396 0 0 0-1.095 2.477"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.885 15.173c2.127.3 1.518 2.109.55 2.109c-2.659 0-4.422-1.627-6.94-1.627c-3.414 0-4.132 4.922-1.2 5.617m6.565 3.224l1.693-1.694l1.694 1.694l-1.694 1.694zm1.693-1.692v-2.313m0 5.704v3.477"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.876 26.272c-.805 1.94-2.123 3.813-6.005 3.813a4.68 4.68 0 0 1-4.74-4.94c0-2.786.686-4.063 2.768-5.404"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.999 27.717v-7.031l-4.568 1.932m1.609 6.349l2.959-1.25m-2.959-5.776v6.79"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.876 26.272c.395 2.818-1.641 6.59-6.596 6.59c-3.85 0-7.203-2.727-7.203-6.563c0-3.986 3.281-5.777 5.822-6.559"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.385 32.813l35.027 6.176M15.187 4.384L9.011 39.412M38.989 8.588l-6.176 35.027m10.803-28.428L8.588 9.011"></svg:path>`,
})
export class ArcticonsCrosswordIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
