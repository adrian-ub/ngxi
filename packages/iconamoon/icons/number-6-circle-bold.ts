import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber6CircleBoldIcon],svg[iconamoon-number-6-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></svg:circle><svg:path fill="currentColor" d="M14.046 7.685a1.25 1.25 0 0 0-2.092-1.37zm-5.617 4.01a1.25 1.25 0 1 0 2.092 1.37zM13.75 14A1.75 1.75 0 0 1 12 15.75v2.5A4.25 4.25 0 0 0 16.25 14zM12 15.75A1.75 1.75 0 0 1 10.25 14h-2.5A4.25 4.25 0 0 0 12 18.25zM10.25 14c0-.966.784-1.75 1.75-1.75v-2.5A4.25 4.25 0 0 0 7.75 14zM12 12.25c.966 0 1.75.784 1.75 1.75h2.5A4.25 4.25 0 0 0 12 9.75zm-.046-5.935l-3.525 5.38l2.092 1.37l3.524-5.38z"></svg:path></svg:g>`,
})
export class IconamoonNumber6CircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
