import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwCaretUpIcon],svg[uiw-caret-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.685 5.284l7.019 8.136q.36.415.296.954q-.065.539-.71.626H2.744q-.526-.038-.693-.522q-.166-.486.17-.981l7.097-8.213Q9.618 5 10 5t.685.284"></svg:path>`,
})
export class UiwCaretUpIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
