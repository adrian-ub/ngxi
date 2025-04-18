import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsInsertRowDownIcon],svg[hugeicons-insert-row-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 21.187c.889-.202 1.564-.533 2.109-1.078C21.5 18.717 21.5 16.479 21.5 12c0-4.478 0-6.718-1.391-8.109S16.479 2.5 12 2.5c-4.478 0-6.718 0-8.109 1.391S2.5 7.521 2.5 12c0 4.478 0 6.718 1.391 8.109c.545.545 1.22.876 2.109 1.078"></svg:path><svg:path d="M12 13.5v7m-3-2l3 3l3-3M2.5 9h19m-13-6.5V9m7-6.5V9"></svg:path></svg:g>`,
})
export class HugeiconsInsertRowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
