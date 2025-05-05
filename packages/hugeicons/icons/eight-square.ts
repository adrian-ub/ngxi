import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEightSquareIcon],svg[hugeicons-eight-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.997 12c0-4.478 0-6.718 1.391-8.109S8.018 2.5 12.498 2.5c4.477 0 6.717 0 8.108 1.391s1.391 3.63 1.391 8.109c0 4.478 0 6.718-1.391 8.109s-3.63 1.391-8.109 1.391c-4.478 0-6.717 0-8.109-1.391c-1.39-1.392-1.39-3.63-1.39-8.109"></svg:path><svg:path d="M12.997 12h-1m1 0a2.5 2.5 0 0 0 0-5h-1a2.5 2.5 0 0 0 0 5m1 0a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1 0-5"></svg:path></svg:g>`,
})
export class HugeiconsEightSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
