import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiScreenRotationIcon],svg[mdi-screen-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 21.5c-3.25-1.56-5.59-4.74-5.95-8.5H.05C.56 19.16 5.71 24 12 24l.66-.03l-3.81-3.81m5.98 1.03L2.81 9.17l6.36-6.36l12.02 12.02M10.23 1.75a1.49 1.49 0 0 0-2.12 0L1.75 8.11a1.49 1.49 0 0 0 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12zm6.27.75c3.25 1.57 5.59 4.74 5.95 8.5h1.5C23.44 4.84 18.29 0 12 0l-.66.03l3.81 3.81z"></svg:path>`,
})
export class MdiScreenRotationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
