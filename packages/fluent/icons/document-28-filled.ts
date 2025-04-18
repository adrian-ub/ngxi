import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocument28FilledIcon],svg[fluent-document-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 2v8a2 2 0 0 0 2 2h7.999l.001.078V23.6a2.4 2.4 0 0 1-2.4 2.4H6.4A2.4 2.4 0 0 1 4 23.6V4.4A2.4 2.4 0 0 1 6.4 2z"></svg:path><svg:path d="M15.5 2.475V10a.5.5 0 0 0 .5.5h7.502a3 3 0 0 0-.307-.366l-7.431-7.431a2.4 2.4 0 0 0-.264-.228"></svg:path></svg:g>`,
})
export class FluentDocument28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
