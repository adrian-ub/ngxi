import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiIpIcon],svg[mdi-ip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11h-2V9h2zM3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm7 2H8v10h2zm2 10h2v-4h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-4z"></svg:path>`,
})
export class MdiIpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
