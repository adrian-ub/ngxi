import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosRockyLinuxIconIcon],svg[logos-rocky-linux-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#10B981" d="M248.877 170.21C253.492 156.996 256 142.79 256 128C256 57.307 198.692 0 128 0S0 57.307 0 128c0 34.979 14.03 66.681 36.77 89.784l129.84-129.84L198.668 120zm-23.381 40.73l-58.885-58.884l-92.214 92.213C90.703 251.8 108.86 256 128 256c39.05 0 74.019-17.488 97.496-45.06"></svg:path>`,
})
export class LogosRockyLinuxIconIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
