import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightInboxIcon],svg[mdi-light-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4h11a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v8h5v.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5V15h5V7a2 2 0 0 0-2-2zM4 18a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-2h-4.04c-.24 1.7-1.7 3-3.46 3s-3.22-1.3-3.46-3H4z"></svg:path>`,
})
export class MdiLightInboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
