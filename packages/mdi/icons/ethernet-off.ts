import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEthernetOffIcon],svg[mdi-ethernet-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.39 1.73L1.11 3l1.21 1.21c-.2.35-.32.74-.32 1.17v14.25A2.37 2.37 0 0 0 4.38 22h15.25c.15 0 .29 0 .44-.04l.77.77l1.27-1.27zM15 18h-2v-3h-2v3H9v-3H7v3H5V9h2.11L15 16.89zM9.2 6l-3-3h13.43A2.37 2.37 0 0 1 22 5.38V18.8l-3-3V9h-4V6z"></svg:path>`,
})
export class MdiEthernetOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
