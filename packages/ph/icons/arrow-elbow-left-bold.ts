import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowLeftBoldIcon],svg[ph-arrow-elbow-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m240.49 104.49l-96 96a12 12 0 0 1-17 0L36 109v43a12 12 0 0 1-24 0V80a12 12 0 0 1 12-12h72a12 12 0 0 1 0 24H53l83 83l87.51-87.52a12 12 0 0 1 17 17Z"></svg:path>`,
})
export class PhArrowElbowLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
