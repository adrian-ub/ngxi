import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextHanging20FilledIcon],svg[fluent-text-hanging-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.25 3.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5zm-5 10a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5zM12 9.25a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 .75-.75m3.72 1.47a.75.75 0 1 1 1.06 1.06l-.97.97l.97.97a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06z"></svg:path>`,
})
export class FluentTextHanging20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
