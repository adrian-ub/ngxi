import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLibreofficeImpressRemoteIcon],svg[arcticons-libreoffice-impress-remote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.95 5.94H9.654v35.022h9.669"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.676 40.962h9.669v-22.47L25.949 5.94m4.147 0h8.249v8.699z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.459 27.8v14.26h8.992V27.8Zm.518-3.56c1.907-1.996 5.74-2.022 7.82-.046"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.836 22.617c3.548-3.813 8.563-3.842 12.102-.068"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.605 20.025c5.234-5.342 11.038-5.189 16.813 0"></svg:path>`,
})
export class ArcticonsLibreofficeImpressRemoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
