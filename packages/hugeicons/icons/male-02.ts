import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMale02Icon],svg[hugeicons-male-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.103 22.506H3.913c-.53 0-1.03-.24-1.34-.64a1.49 1.49 0 0 1-.27-1.29a4.85 4.85 0 0 1 3.27-3.43l3.18-.96v-1.02c-1.59-1.31-3-3.13-3-7s2.15-6.17 5.74-6.17c1.83 0 2.88.64 3.34 1.01c3.41.2 3.41 3.79 3.41 5.16c0 3.87-1.41 5.69-3 7v1.02l3.18.96c1.61.49 2.86 1.8 3.27 3.42c.11.45.01.92-.27 1.29c-.31.4-.81.64-1.34.64zm-8.6-19c-2.74 0-4.24 1.66-4.24 4.67c0 3.27 1.04 4.74 2.71 6.05c.18.14.29.36.29.59v1.94c0 .33-.22.62-.53.72l-3.72 1.12c-1.1.33-1.97 1.24-2.25 2.36c0 .01.07.06.16.06h16.19c.09 0 .15-.04.16-.06a3.37 3.37 0 0 0-2.25-2.35l-3.71-1.12a.75.75 0 0 1-.53-.72v-1.94c0-.23.11-.45.29-.59c1.67-1.31 2.71-2.77 2.71-6.05c0-3.06-.85-3.67-2.21-3.67a.75.75 0 0 1-.56-.25c-.02-.02-.74-.75-2.49-.75z" color="currentColor"></svg:path>`,
})
export class HugeiconsMale02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
