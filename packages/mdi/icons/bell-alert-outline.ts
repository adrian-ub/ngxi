import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBellAlertOutlineIcon],svg[mdi-bell-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a2 2 0 0 0-2 2a2 2 0 0 0 0 .29C7.12 5.14 5 7.82 5 11v6l-2 2v1h18v-1l-2-2v-6c0-3.18-2.12-5.86-5-6.71A2 2 0 0 0 14 4a2 2 0 0 0-2-2m0 4a5 5 0 0 1 5 5v7H7v-7a5 5 0 0 1 5-5m9 1v6h2V7zm0 8v2h2v-2zm-11 6a2 2 0 0 0 2 2a2 2 0 0 0 2-2z"></svg:path>`,
})
export class MdiBellAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
