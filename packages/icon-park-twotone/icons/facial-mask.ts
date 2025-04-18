import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneFacialMaskIcon],svg[icon-park-twotone-facial-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTFacialMask0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path fill="#555" stroke-linejoin="round" d="M10 15.114a3 3 0 0 1 1.991-2.825l11-3.929a3 3 0 0 1 2.018 0l11 3.929A3 3 0 0 1 38 15.114v16.49c0 .885-.39 1.725-1.092 2.264C34.468 35.742 28.434 40 24 40s-10.467-4.257-12.908-6.132A2.84 2.84 0 0 1 10 31.604z"></svg:path><svg:path stroke-linecap="round" d="M10 28c-3.314 0-6-3.11-6-6.947S6.686 16 10 16m28 12c3.314 0 6-3.11 6-6.947S41.314 16 38 16"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m16 25l8-4l8 4m-13 6l5-2l5 2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTFacialMask0)"></svg:path>`,
})
export class IconParkTwotoneFacialMaskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
