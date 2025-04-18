import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsReolinkIcon],svg[arcticons-reolink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.364 24.079v7.4h7.4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.364 24.079a7.4 7.4 0 0 1 7.4-7.4h0a7.4 7.4 0 0 1 7.4 7.4h0a7.4 7.4 0 0 1-7.4 7.4h0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 24A18.5 18.5 0 0 1 24 5.5h0A18.5 18.5 0 0 1 42.5 24h0A18.5 18.5 0 0 1 24 42.5h0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 24v18.5H24"></svg:path>`,
})
export class ArcticonsReolinkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
