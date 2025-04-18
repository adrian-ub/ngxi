import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCameraOffFillIcon],svg[ri-camera-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.586 21H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h.586L1.394 2.808l1.414-1.415l19.799 19.8l-1.415 1.414zM7.556 8.97a6 6 0 0 0 8.475 8.475l-1.417-1.417a4 4 0 0 1-5.642-5.642zM22 17.786l-4.045-4.045Q18 13.377 18 13a6 6 0 0 0-6.74-5.955L8.107 3.893L9 3h6l2 2h4a1 1 0 0 1 1 1zm-8.49-8.492a4 4 0 0 1 2.197 2.198z"></svg:path>`,
})
export class RiCameraOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
