import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlinePhotoCameraIcon],svg[ic-outline-photo-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.12 4l1.83 2H20v12H4V6h4.05l1.83-2zM15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3s-3-1.35-3-3s1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5"></svg:path>`,
})
export class IcOutlinePhotoCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
