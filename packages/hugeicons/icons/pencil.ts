import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPencilIcon],svg[hugeicons-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6 22v-8.306c0-1.565 0-2.348.215-3.086c.214-.739.63-1.39 1.465-2.693l2.656-4.15C11.088 2.587 11.465 2 12 2s.912.588 1.664 1.764l2.656 4.151c.834 1.303 1.25 1.954 1.465 2.693c.215.738.215 1.52.215 3.086V22"></svg:path><svg:path d="M7 11c.632.323 1.489.973 2.28 1c1.019.032 1.707-.863 2.72-.863s1.701.895 2.72.862c.791-.026 1.649-.676 2.28-.999m-5 1v10M10 5h4"></svg:path></svg:g>`,
})
export class HugeiconsPencilIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
