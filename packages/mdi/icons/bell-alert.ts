import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBellAlertIcon],svg[mdi-bell-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 7v6h-2V7m0 8h2v2h-2M12 2a2 2 0 0 0-2 2a2 2 0 0 0 0 .29C7.12 5.14 5 7.82 5 11v6l-2 2v1h18v-1l-2-2v-6c0-3.18-2.12-5.86-5-6.71A2 2 0 0 0 14 4a2 2 0 0 0-2-2m-2 19a2 2 0 0 0 2 2a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class MdiBellAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
