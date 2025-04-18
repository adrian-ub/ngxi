import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentScript24FilledIcon],svg[fluent-script-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2.038V2q-.1 0-.2.007V2H7.75A3.25 3.25 0 0 0 4.5 5.25V15.5h7.75c.69 0 1.25.56 1.25 1.25v3c0 1.268 1.095 2.25 2.527 2.25c1.292 0 2.31-.777 2.497-1.882q.006-.09.007-.18V4.608A2.98 2.98 0 0 1 20 2.038M1 17.902c0-.498.404-.902.902-.902H12v2.85h.001a3.73 3.73 0 0 0 .751 2.15H4c-1.623 0-3-1.235-3-2.925zM23.25 4.375v2.66c0 .947-.767 1.715-1.714 1.715H20V4.375a1.625 1.625 0 1 1 3.25 0"></svg:path>`,
})
export class FluentScript24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
