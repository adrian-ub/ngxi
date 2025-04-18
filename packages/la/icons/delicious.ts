import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laDeliciousIcon],svg[la-delicious-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5c-2.75 0-5 2.25-5 5v12c0 2.75 2.25 5 5 5h12c2.75 0 5-2.25 5-5V10c0-2.75-2.25-5-5-5zm0 2h6v9h9v6c0 1.668-1.332 3-3 3h-6v-9H7v-6c0-1.668 1.332-3 3-3"></svg:path>`,
})
export class LaDeliciousIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
