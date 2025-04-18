import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCropSelectionIcon],svg[streamline-crop-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.5 3.5h3a1 1 0 0 1 1 1v3"></svg:path><svg:path d="M3.5.5v9a1 1 0 0 0 1 1h9m-10-7h-3m10 7v3"></svg:path></svg:g>`,
})
export class StreamlineCropSelectionIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
