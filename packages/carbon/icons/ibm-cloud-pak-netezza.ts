import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudPakNetezzaIcon],svg[carbon-ibm-cloud-pak-netezza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10v9.2L13.5 10H11v12h2v-9.2l5.5 9.2H21V10z"></svg:path><svg:path fill="currentColor" d="M16 30C8.3 30 2 23.7 2 16S8.3 2 16 2s14 6.3 14 14s-6.3 14-14 14m0-26C9.4 4 4 9.4 4 16s5.4 12 12 12s12-5.4 12-12S22.6 4 16 4"></svg:path>`,
})
export class CarbonIbmCloudPakNetezzaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
