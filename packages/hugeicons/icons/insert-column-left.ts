import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsInsertColumnLeftIcon],svg[hugeicons-insert-column-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.813 18c.201.889.533 1.564 1.078 2.109C5.28 21.5 7.52 21.5 11.999 21.5s6.718 0 8.11-1.391c1.39-1.392 1.39-3.63 1.39-8.109c0-4.478 0-6.718-1.39-8.109C18.716 2.5 16.477 2.5 11.998 2.5s-6.717 0-8.108 1.391c-.545.545-.877 1.22-1.078 2.109"></svg:path><svg:path d="m5.5 9l-3 3l3 3m-2-3h7M15 2.498v19m6.5-13H15m6.5 7H15"></svg:path></svg:g>`,
})
export class HugeiconsInsertColumnLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
