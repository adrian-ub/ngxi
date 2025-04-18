import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaintBrush32RegularIcon],svg[fluent-paint-brush-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15.75A3.25 3.25 0 0 1 22.75 22H20v4a4 4 0 0 1-8 0v-4H9.25A3.25 3.25 0 0 1 6 18.75zm2 1v10h16V4h-2v5a1 1 0 1 1-2 0V4h-2v3a1 1 0 1 1-2 0V4zm16 14.75V16H8v2.75c0 .69.56 1.25 1.25 1.25H13a1 1 0 0 1 1 1v5a2 2 0 1 0 4 0v-5a1 1 0 0 1 1-1h3.75c.69 0 1.25-.56 1.25-1.25"></svg:path>`,
})
export class FluentPaintBrush32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
