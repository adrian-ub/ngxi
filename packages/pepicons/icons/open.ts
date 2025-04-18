import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsOpenIcon],svg[pepicons-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.707 10.707a1 1 0 0 1-1.414-1.414l6-6a1 1 0 1 1 1.414 1.414l-6 6Z"></svg:path><svg:path d="M15 15v-3.5a1 1 0 1 1 2 0V16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4.5a1 1 0 0 1 0 2H5v10h10Zm2-7a1 1 0 1 1-2 0V4a1 1 0 1 1 2 0v4Z"></svg:path><svg:path d="M12 5a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2h-4Z"></svg:path></svg:g>`,
})
export class PepiconsOpenIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
