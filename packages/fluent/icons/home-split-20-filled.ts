import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHomeSplit20FilledIcon],svg[fluent-home-split-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.003 2.381a1.5 1.5 0 0 0-2.006 0l-5.5 4.95A1.5 1.5 0 0 0 3 8.446V15.5A1.5 1.5 0 0 0 4.5 17h11a1.5 1.5 0 0 0 1.5-1.5V8.446a1.5 1.5 0 0 0-.497-1.115zm-.503 11.12v1a.5.5 0 0 1-1 0v-1a.5.5 0 1 1 1 0M10 9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 10 9m.5-3.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 1 0"></svg:path>`,
})
export class FluentHomeSplit20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
