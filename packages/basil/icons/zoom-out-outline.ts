import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilZoomOutOutlineIcon],svg[basil-zoom-out-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.7 9.45a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.399 14.945a6.75 6.75 0 0 0 8.986.5l5.156 5.156a.75.75 0 1 0 1.06-1.06l-5.155-5.156a6.751 6.751 0 1 0-10.047.56m1.06-8.486a5.25 5.25 0 0 0 7.42 7.43l.005-.005l.004-.005A5.25 5.25 0 0 0 6.46 6.46" clip-rule="evenodd"></svg:path>`,
})
export class BasilZoomOutOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
