import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMessageAlertOutlineIcon],svg[mdi-message-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 10h-2V6h2zm0 2h-2v2h2zm9-8v12a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2m-2 0H4v13.2L5.2 16H20z"></svg:path>`,
})
export class MdiMessageAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
