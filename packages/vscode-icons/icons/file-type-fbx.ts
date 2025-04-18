import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeFbxIcon],svg[vscode-icons-file-type-fbx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#008f90" d="M16.597 2L8.252 6.378l-.371 2.704l.014 18.365L16.419 30" opacity=".75"></svg:path><svg:path fill="#00393a" d="M7.895 11.896v3.033l5.435 2.746l3.157 2.031l.043-7.817z"></svg:path><svg:path fill="#008f90" d="m16.53 11.889l-.043 7.817l6.904-2.663l.755-5.161z"></svg:path><svg:path fill="#004748" d="m8.225 6.378l-.371 2.691l8.702-.605L16.597 2z"></svg:path><svg:path fill="#009b9d" d="M22.375 3.222L16.597 2l-.041 6.464l7.549-1.276z"></svg:path><svg:path fill="#002526" d="m8.252 6.378l-.371 2.704l.014 18.365l8.647-15.551z" opacity=".7"></svg:path><svg:path fill="#006c6e" d="m7.895 27.447l4.735 1.414L16.419 30l.123-18.104z" opacity=".5"></svg:path>`,
})
export class VscodeIconsFileTypeFbxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
