import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentScaleFit20RegularIcon],svg[fluent-scale-fit-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.876 7.921a.5.5 0 0 1-.047.706l-.998.873H8.5a.5.5 0 0 1 0 1H5.83l1 .874a.5.5 0 1 1-.66.753l-2-1.75a.5.5 0 0 1 0-.753l2-1.75a.5.5 0 0 1 .706.047m7.293 2.58l-.998.873a.5.5 0 0 0 .658.753l2-1.75a.5.5 0 0 0 0-.753l-2-1.75a.5.5 0 0 0-.658.753l.998.873H11.5a.5.5 0 0 0 0 1zM2 5.998a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8.005a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8.005a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5.998a1 1 0 0 0-1-1z"></svg:path>`,
})
export class FluentScaleFit20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
