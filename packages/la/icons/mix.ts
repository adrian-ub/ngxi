import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laMixIcon],svg[la-mix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v20c0 1.654 1.346 3 3 3s3-1.346 3-3V13a1 1 0 0 1 2 0v8c0 1.654 1.346 3 3 3s3-1.346 3-3v-6a1 1 0 0 1 2 0v2c0 1.654 1.346 3 3 3s3-1.346 3-3V5zm2 2h18v10a1 1 0 0 1-2 0v-2c0-1.654-1.346-3-3-3s-3 1.346-3 3v6a1 1 0 0 1-2 0v-8c0-1.654-1.346-3-3-3s-3 1.346-3 3v12a1 1 0 0 1-2 0z"></svg:path>`,
})
export class LaMixIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
