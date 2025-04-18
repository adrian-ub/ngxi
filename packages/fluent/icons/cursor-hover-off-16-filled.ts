import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCursorHoverOff16FilledIcon],svg[fluent-cursor-hover-off-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.293 13l1.853 1.854a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708l1.242 1.241A2 2 0 0 0 1 5v5a2 2 0 0 0 2 2h4V8.5c0-.228.052-.449.146-.646L8 8.707V14.5a.5.5 0 0 0 .9.3l1.35-1.8zm1.612-1.216A2 2 0 0 0 15 10V5a2 2 0 0 0-2-2H5.121z"></svg:path>`,
})
export class FluentCursorHoverOff16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
