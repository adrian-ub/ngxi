import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRecordStop28FilledIcon],svg[fluent-record-stop-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 26c6.627 0 12-5.373 12-12S20.627 2 14 2S2 7.373 2 14s5.373 12 12 12M10.5 9h7a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 9 17.5v-7A1.5 1.5 0 0 1 10.5 9"></svg:path>`,
})
export class FluentRecordStop28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
