import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCertificate2OffIcon],svg[tabler-certificate-2-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 12a3 3 0 1 0 3 3m-4-8h3"></svg:path><svg:path d="M10 18v4l2-1l2 1v-4m-4 1H8a2 2 0 0 1-2-2V6m1.18-2.825C7.43 3.063 7.709 3 8 3h8a2 2 0 0 1 2 2v9m-.175 3.82A2 2 0 0 1 16 19h-2M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerCertificate2OffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
