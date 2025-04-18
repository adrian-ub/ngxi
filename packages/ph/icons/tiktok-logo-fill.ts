import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTiktokLogoFillIcon],svg[ph-tiktok-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 80v40a8 8 0 0 1-8 8a103.25 103.25 0 0 1-48-11.71V156a76 76 0 0 1-152 0c0-36.9 26.91-69.52 62.6-75.88A8 8 0 0 1 96 88v42.69a8 8 0 0 1-4.57 7.23A20 20 0 1 0 120 156V24a8 8 0 0 1 8-8h40a8 8 0 0 1 8 8a48.05 48.05 0 0 0 48 48a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhTiktokLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
