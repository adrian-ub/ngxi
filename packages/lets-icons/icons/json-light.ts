import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsJsonLightIcon],svg[lets-icons-json-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M14 19h2a2 2 0 0 0 2-2v-2.438a2 2 0 0 1 1.515-1.94l1.515-.38c.252-.063.252-.421 0-.485l-1.515-.378A2 2 0 0 1 18 9.439V5h-4m-4 0H8a2 2 0 0 0-2 2v2.438a2 2 0 0 1-1.515 1.94l-1.515.38c-.252.063-.252.421 0 .485l1.515.378A2 2 0 0 1 6 14.561V19h4"></svg:path>`,
})
export class LetsIconsJsonLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
