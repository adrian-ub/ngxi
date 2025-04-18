import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phEjectFillIcon],svg[ph-eject-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33.31 126.24a15.59 15.59 0 0 1 3.1-17.12l73.73-77.51a24.76 24.76 0 0 1 35.72 0l73.73 77.51a15.59 15.59 0 0 1 3.1 17.12a16.18 16.18 0 0 1-14.93 9.76H48.24a16.18 16.18 0 0 1-14.93-9.76M208 152H48a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhEjectFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
