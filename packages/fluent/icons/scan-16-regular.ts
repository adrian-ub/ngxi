import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentScan16RegularIcon],svg[fluent-scan-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.683 4.258A4.98 4.98 0 0 1 8.56 3.031l-2.27 3.93l-.023.04zm-.708.774L6.266 9H3.1A5 5 0 0 1 3 8a4.98 4.98 0 0 1 .975-2.968M8 6l1.584-2.744a5 5 0 0 1 3 2.744zm-.866 1.5l.013-.023A1 1 0 0 1 8.866 8.5l-.013.023A1 1 0 0 1 7.133 7.5m2.6-.5H12.9a5.02 5.02 0 0 1-.876 3.968zm0 1.999l1.583 2.743a4.98 4.98 0 0 1-3.877 1.227l2.27-3.93zM8 10l-1.584 2.744a5 5 0 0 1-3-2.744zm0-8a6 6 0 1 0 0 12A6 6 0 0 0 8 2m1.734 5h-.002Z"></svg:path>`,
})
export class FluentScan16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
