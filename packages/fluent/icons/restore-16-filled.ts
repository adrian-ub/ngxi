import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRestore16FilledIcon],svg[fluent-restore-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M5.085 4H10a2 2 0 0 1 2 2v4.915A1.5 1.5 0 0 0 13 9.5V6a3 3 0 0 0-3-3H6.5a1.5 1.5 0 0 0-1.415 1z" fill="currentColor"></svg:path><svg:path d="M4.5 5A1.5 1.5 0 0 0 3 6.5v5A1.5 1.5 0 0 0 4.5 13h5a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 9.5 5h-5z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentRestore16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
