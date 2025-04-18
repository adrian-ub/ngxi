import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber9BoldIcon],svg[iconamoon-number-9-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.941 19.336a1.25 1.25 0 1 0 2.118 1.329zm7.345-7a1.25 1.25 0 1 0-2.118-1.328zM8.25 9A3.75 3.75 0 0 1 12 5.25v-2.5A6.25 6.25 0 0 0 5.75 9zM12 5.25A3.75 3.75 0 0 1 15.75 9h2.5A6.25 6.25 0 0 0 12 2.75zM15.75 9A3.75 3.75 0 0 1 12 12.75v2.5A6.25 6.25 0 0 0 18.25 9zM12 12.75A3.75 3.75 0 0 1 8.25 9h-2.5A6.25 6.25 0 0 0 12 15.25zm.059 7.915l5.227-8.328l-2.118-1.33l-5.227 8.329z"></svg:path>`,
})
export class IconamoonNumber9BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
