import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArcherIcon],svg[hugeicons-archer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 17.03L20 21c-.556-.556-1.51-2.357-.884-5.116c.782-3.449 2.25-6.917-3.18-8.82c-1.903-5.43-5.371-3.962-8.82-3.18C4.356 4.51 2.556 3.556 2 3l4 9.074M5 18H2l3-3h3v3l-3 3zm3-3L20 3m-3 0h2c.471 0 .707 0 .854.146C20 3.293 20 3.53 20 4v2" color="currentColor"></svg:path>`,
})
export class HugeiconsArcherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
