import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoBloodTestIcon],svg[fontisto-blood-test-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.355 20.131l2.616-.146l.153-2.615l-4.978-4.978l-2.767 2.762z"></svg:path><svg:path fill="currentColor" d="M10.236 1.607L8.683 3.16L6.667 1.144a3.906 3.906 0 1 0-5.522 5.518l.002.002L3.164 8.68l-1.553 1.553L3.578 12.2l1.663-1.664l11.532 11.531l3.653-.207l2.136 2.136l1.45-1.45l-2.136-2.136l.207-3.653L10.552 5.226l1.664-1.664zm10.3 18.948l-3.266.186L6.158 9.629l3.453-3.453l11.112 11.112z"></svg:path>`,
})
export class FontistoBloodTestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
