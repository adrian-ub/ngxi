import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiContactsIcon],svg[mdi-contacts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 0H4v2h16zM4 24h16v-2H4zM20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-8 2.75A2.25 2.25 0 0 1 14.25 9A2.25 2.25 0 0 1 12 11.25A2.25 2.25 0 0 1 9.75 9A2.25 2.25 0 0 1 12 6.75M17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5z"></svg:path>`,
})
export class MdiContactsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
