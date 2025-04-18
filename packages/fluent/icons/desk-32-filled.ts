import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDesk32FilledIcon],svg[fluent-desk-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 4A3.25 3.25 0 0 0 2 7.25V10h26v17a1 1 0 1 0 2 0V7.25A3.25 3.25 0 0 0 26.75 4zM16 12H2v11.5A4.5 4.5 0 0 0 6.5 28h5a4.5 4.5 0 0 0 4.5-4.5zM6 17a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1"></svg:path>`,
})
export class FluentDesk32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
