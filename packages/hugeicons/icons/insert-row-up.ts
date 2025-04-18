import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsInsertRowUpIcon],svg[hugeicons-insert-row-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 2.813c.889.201 1.564.533 2.109 1.078C21.5 5.28 21.5 7.52 21.5 11.999s0 6.718-1.391 8.11c-1.392 1.39-3.63 1.39-8.109 1.39c-4.478 0-6.718 0-8.109-1.39C2.5 18.716 2.5 16.477 2.5 11.998s0-6.717 1.391-8.108c.545-.545 1.22-.877 2.109-1.078"></svg:path><svg:path d="m9 5.5l3-3l3 3m-3-2v7M2.5 15h19m-13 6.5V15m7 6.5V15"></svg:path></svg:g>`,
})
export class HugeiconsInsertRowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
