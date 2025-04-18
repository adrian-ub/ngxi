import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCertificateIcon],svg[icon-park-twotone-certificate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCertificate0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M26 36H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2h-8M12 14h24m-24 7h6m-6 7h4"></svg:path><svg:path fill="#555" d="M30 33a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"></svg:path><svg:path fill="#555" stroke-linecap="round" stroke-linejoin="round" d="m30 40l4 2V31.472S32.86 33 30 33s-4-1.5-4-1.5V42z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCertificate0)"></svg:path>`,
})
export class IconParkTwotoneCertificateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
