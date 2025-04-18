import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookNumber16FilledIcon],svg[fluent-book-number-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1h6a2 2 0 0 1 2 2v9.497a.5.5 0 0 1-.5.5H4V13a1 1 0 0 0 1 1h7.5a.5.5 0 0 1 0 1H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2m1 4.996h.601L6.38 7H5.5a.5.5 0 0 0 0 1h.658l-.142.639a.5.5 0 0 0 .977.216L7.182 8h.969l-.143.638a.5.5 0 1 0 .976.218L9.175 8H10a.5.5 0 0 0 0-1h-.602l.225-1.004h.877a.5.5 0 0 0 0-1h-.654l.141-.634a.5.5 0 0 0-.976-.218l-.19.852h-.974l.14-.635a.5.5 0 0 0-.976-.216l-.188.85H6a.5.5 0 0 0 0 1M7.403 7h.97l.225-1.004h-.972z"></svg:path>`,
})
export class FluentBookNumber16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
