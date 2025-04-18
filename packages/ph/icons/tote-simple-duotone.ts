import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phToteSimpleDuotoneIcon],svg[ph-tote-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m231.94 80.93l-14.25 120a8.06 8.06 0 0 1-8 7.07H46.33a8.06 8.06 0 0 1-8-7.07l-14.25-120a8 8 0 0 1 8-8.93h191.84a8 8 0 0 1 8.02 8.93" opacity=".2"></svg:path><svg:path d="M236 69.4a16.13 16.13 0 0 0-12.08-5.4H176a48 48 0 0 0-96 0H32.08a16.13 16.13 0 0 0-12 5.4a16 16 0 0 0-3.92 12.48l14.26 120a16 16 0 0 0 16 14.12h163.25a16 16 0 0 0 16-14.12l14.26-120A16 16 0 0 0 236 69.4M128 32a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m81.76 168a.13.13 0 0 1-.09 0H46.25L32.08 80H224Z"></svg:path></svg:g>`,
})
export class PhToteSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
