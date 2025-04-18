import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiGoveeH6076Icon],svg[cbi-govee-h6076-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 22.63c-.99-.05-1.5-.13-1.5-.13v-21s.03-.5-.5-.5s-.5.5-.5.5v21s-.51.08-1.5.13S8 23 8.5 23h7c.5 0-.51-.32-1.5-.37"></svg:path>`,
})
export class CbiGoveeH6076Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
