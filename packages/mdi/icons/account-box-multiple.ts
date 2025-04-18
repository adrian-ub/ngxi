import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAccountBoxMultipleIcon],svg[mdi-account-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6H2v14a2 2 0 0 0 2 2h14v-2H4zm16-4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm-3 5a3 3 0 0 0-3-3a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3m-9 8v1h12v-1c0-2-4-3.1-6-3.1S8 13 8 15"></svg:path>`,
})
export class MdiAccountBoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
