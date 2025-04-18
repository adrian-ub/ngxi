import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiArrowRightIcon],svg[zmdi-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m171 21l170 171l-170 171l-30-30l119-120H0v-42h260L141 51z"></svg:path>`,
})
export class ZmdiArrowRightIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
