import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber9CircleBoldIcon],svg[iconamoon-number-9-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></svg:circle><svg:path fill="currentColor" d="M9.955 16.315a1.25 1.25 0 1 0 2.09 1.37zm5.615-4.01a1.25 1.25 0 1 0-2.09-1.37zM10.25 10c0-.966.784-1.75 1.75-1.75v-2.5A4.25 4.25 0 0 0 7.75 10zM12 8.25c.966 0 1.75.784 1.75 1.75h2.5A4.25 4.25 0 0 0 12 5.75zM13.75 10A1.75 1.75 0 0 1 12 11.75v2.5A4.25 4.25 0 0 0 16.25 10zM12 11.75A1.75 1.75 0 0 1 10.25 10h-2.5A4.25 4.25 0 0 0 12 14.25zm.046 5.935l3.524-5.38l-2.09-1.37l-3.525 5.38z"></svg:path></svg:g>`,
})
export class IconamoonNumber9CircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
