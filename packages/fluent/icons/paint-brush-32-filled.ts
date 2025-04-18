import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaintBrush32FilledIcon],svg[fluent-paint-brush-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7V2H7a1 1 0 0 0-1 1v11h20V3a1 1 0 0 0-1-1h-2v7a1 1 0 1 1-2 0V2h-2v5a1 1 0 1 1-2 0m9 9H6v2.75A3.25 3.25 0 0 0 9.25 22H13v5a3 3 0 1 0 6 0v-5h3.75A3.25 3.25 0 0 0 26 18.75z"></svg:path>`,
})
export class FluentPaintBrush32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
