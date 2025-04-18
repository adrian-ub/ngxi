import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHexagonThree20FilledIcon],svg[fluent-hexagon-three-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.753 2.126A1.25 1.25 0 0 1 4.836 1.5h3.17c.446 0 .86.238 1.082.626l1.586 2.75a1.25 1.25 0 0 1 0 1.248L9.09 8.874a1.25 1.25 0 0 1-1.083.626h-3.17a1.25 1.25 0 0 1-1.083-.626l-1.586-2.75a1.25 1.25 0 0 1 0-1.248zM12.597 6c-.447 0-.86.239-1.083.626l-1.586 2.75a1.25 1.25 0 0 0 0 1.248l1.586 2.75a1.25 1.25 0 0 0 1.083.626h3.17a1.25 1.25 0 0 0 1.082-.626l1.586-2.75a1.25 1.25 0 0 0 0-1.248l-1.586-2.75A1.25 1.25 0 0 0 15.766 6zm-8.844 5.126a1.25 1.25 0 0 1 1.083-.626h3.17c.446 0 .86.239 1.082.626l1.586 2.75a1.25 1.25 0 0 1 0 1.248l-1.585 2.75a1.25 1.25 0 0 1-1.083.626h-3.17a1.25 1.25 0 0 1-1.083-.626l-1.586-2.75a1.25 1.25 0 0 1 0-1.248z"></svg:path>`,
})
export class FluentHexagonThree20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
