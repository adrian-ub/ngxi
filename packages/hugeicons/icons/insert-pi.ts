import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsInsertPiIcon],svg[hugeicons-insert-pi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 8.8C3 7 5.061 5.2 7.685 5.2h9.272C19.2 5.2 21 3.85 21 2.5m-4.5 3L16 11"></svg:path><svg:path d="M10 5.5c-.133 3.063-.4 8.75-.8 10.5S8 19.5 6 19.5m11-3.333V17.5m0 0v1.333m0-1.333h1.333M17 17.5h-1.333m5.333 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path></svg:g>`,
})
export class HugeiconsInsertPiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
