import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightLinkIcon],svg[mdi-light-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 13v-1h7v1zm7.5-6a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H13v-1h2.5c2.5 0 4.5-2 4.5-4.5S18 8 15.5 8H13V7zm-8 11A5.5 5.5 0 0 1 2 12.5A5.5 5.5 0 0 1 7.5 7H10v1H7.5C5 8 3 10 3 12.5S5 17 7.5 17H10v1z"></svg:path>`,
})
export class MdiLightLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
