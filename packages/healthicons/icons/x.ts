import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsXIcon],svg[healthicons-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M35.28 10.464a2 2 0 0 1 .256 2.816L26.603 24l8.933 10.72a2 2 0 1 1-3.072 2.56L24 27.124L15.537 37.28a2 2 0 1 1-3.073-2.56L21.397 24l-8.933-10.72a2 2 0 1 1 3.073-2.56L24 20.876l8.464-10.156a2 2 0 0 1 2.816-.256" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsXIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
