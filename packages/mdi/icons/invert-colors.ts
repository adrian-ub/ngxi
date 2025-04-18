import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvertColorsIcon],svg[mdi-invert-colors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19.58c-1.6 0-3.11-.62-4.24-1.75A5.95 5.95 0 0 1 6 13.58c0-1.58.62-3.11 1.76-4.24L12 5.1m5.66 2.83L12 2.27L6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31A7.98 7.98 0 0 0 12 21.58c2.05 0 4.1-.78 5.66-2.34c3.12-3.12 3.12-8.19 0-11.31"></svg:path>`,
})
export class MdiInvertColorsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
