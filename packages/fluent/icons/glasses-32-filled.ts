import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGlasses32FilledIcon],svg[fluent-glasses-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.01 8.524A1.5 1.5 0 0 1 10.15 8H12a1 1 0 1 0 0-2h-1.85a3.5 3.5 0 0 0-2.658 1.222l-4.65 5.425A3.5 3.5 0 0 0 2 14.925V19.5A4.5 4.5 0 0 0 6.5 24h4a4.5 4.5 0 0 0 4.5-4.5V17h2v2.5a4.5 4.5 0 0 0 4.5 4.5h4a4.5 4.5 0 0 0 4.5-4.5v-4.575a3.5 3.5 0 0 0-.843-2.278l-4.65-5.425A3.5 3.5 0 0 0 21.85 6H20a1 1 0 1 0 0 2h1.85a1.5 1.5 0 0 1 1.139.524L25.969 12H20.5a3.5 3.5 0 0 0-3.465 3h-2.07a3.5 3.5 0 0 0-3.465-3H6.031z"></svg:path>`,
})
export class FluentGlasses32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
