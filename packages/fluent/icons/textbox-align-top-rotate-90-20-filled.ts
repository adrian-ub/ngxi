import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextboxAlignTopRotate9020FilledIcon],svg[fluent-textbox-align-top-rotate-90-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5zm-3 1v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0m-3 0v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"></svg:path>`,
})
export class FluentTextboxAlignTopRotate9020FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
