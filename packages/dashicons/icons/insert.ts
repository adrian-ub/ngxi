import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsInsertIcon],svg[dashicons-insert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 1c-5 0-9 4-9 9s4 9 9 9s9-4 9-9s-4-9-9-9m0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7s7 3.1 7 7s-3.1 7-7 7m1-11H9v3H6v2h3v3h2v-3h3V9h-3z" class="st0"></svg:path>`,
})
export class DashiconsInsertIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
