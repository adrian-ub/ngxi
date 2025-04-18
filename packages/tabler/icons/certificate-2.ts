import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCertificate2Icon],svg[tabler-certificate-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 15a3 3 0 1 0 6 0a3 3 0 1 0-6 0m1-8h4"></svg:path><svg:path d="M10 18v4l2-1l2 1v-4"></svg:path><svg:path d="M10 19H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2"></svg:path></svg:g>`,
})
export class TablerCertificate2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
