import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentProhibitedNote20FilledIcon],svg[fluent-prohibited-note-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.998 10.17L18 10a8 8 0 1 0-8.844 7.956A3 3 0 0 1 9 17v-.576a6.47 6.47 0 0 1-3.035-1.328l1.564-1.565h.001l7.566-7.566A6.47 6.47 0 0 1 16.5 10h.5c.35 0 .686.06.998.17m-3.963-5.266l-9.131 9.131a6.5 6.5 0 0 1 9.131-9.131M10 13a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm6.5 3h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1m-4-3a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1z"></svg:path>`,
})
export class FluentProhibitedNote20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
