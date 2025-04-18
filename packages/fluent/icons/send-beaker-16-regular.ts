import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSendBeaker16RegularIcon],svg[fluent-send-beaker-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.177.618a.5.5 0 0 1 .547-.065L12.618 6h-2.119q-.055 0-.11.004L2.323 1.97L3.869 7h5.216a1.5 1.5 0 0 0 0 1H3.869l-1.547 5.03l7.675-3.838v1.118l-8.273 4.137a.5.5 0 0 1-.702-.594L2.977 7.5L1.022 1.147a.5.5 0 0 1 .155-.529m12.82 9.787a2 2 0 0 0 .225.92l.35.675h-4.143l.347-.67a2 2 0 0 0 .224-.92V8h-.498a.5.5 0 1 1 0-1h4a.5.5 0 0 1 0 1h-.505zM9.912 13l-.798 1.54a1 1 0 0 0 .888 1.46H15a1 1 0 0 0 .888-1.46L15.089 13z"></svg:path>`,
})
export class FluentSendBeaker16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
