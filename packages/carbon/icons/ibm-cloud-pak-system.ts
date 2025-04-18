import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudPakSystemIcon],svg[carbon-ibm-cloud-pak-system-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 12.914l1.414-1.414L18 14.085L16.585 15.5zm0 5.001l1.415-1.415L18 19.086L16.586 20.5z"></svg:path><svg:path fill="currentColor" d="M19 24h-6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2m-6-14v12h6.001L19 10Z"></svg:path><svg:path fill="currentColor" d="M16 31a1 1 0 0 1-.504-.136l-12-7A1 1 0 0 1 3 23V9a1 1 0 0 1 .496-.864l12-7a1 1 0 0 1 1.008 0l12 7l-1.008 1.728L16 3.158L5 9.574v12.852l11 6.417l11-6.417V15h2v8a1 1 0 0 1-.496.864l-12 7A1 1 0 0 1 16 31"></svg:path>`,
})
export class CarbonIbmCloudPakSystemIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
