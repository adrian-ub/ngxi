import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsEye16Icon],svg[qlementine-icons-eye-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3c2.66 0 5 1.39 6.99 4.12a1.5 1.5 0 0 1 0 1.77c-2 2.73-4.33 4.12-6.99 4.12s-5-1.39-6.99-4.12l-.082-.125A1.5 1.5 0 0 1 1.01 7.12l.215-.287c1.95-2.54 4.21-3.83 6.78-3.83zm0 1C5.69 4 3.63 5.22 1.82 7.7l-.047.079a.5.5 0 0 0 0 .432l.044.074c1.75 2.4 3.72 3.62 5.93 3.7l.256.005c2.31 0 4.37-1.22 6.18-3.7a.5.5 0 0 0 .047-.511l-.045-.075c-1.75-2.4-3.72-3.62-5.93-3.7l-.256-.005zm0 1a.5.5 0 0 1 .5.5a.5.5 0 0 1-.5.5a2 2 0 1 0 1.298 3.53a2 2 0 0 0 .659-1.07c.098-.419.06-.859-.112-1.25a.501.501 0 0 1 .917-.399a3 3 0 0 1-.821 3.49a2.98 2.98 0 0 1-3.57.212c-.54-.354-.951-.873-1.17-1.48s-.241-1.27-.056-1.89a3.03 3.03 0 0 1 1.08-1.55A3 3 0 0 1 8.015 5z"></svg:path>`,
})
export class QlementineIconsEye16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
