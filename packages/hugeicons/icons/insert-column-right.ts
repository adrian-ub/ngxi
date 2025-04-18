import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsInsertColumnRightIcon],svg[hugeicons-insert-column-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21.187 18c-.202.889-.533 1.564-1.078 2.109C18.717 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391c.545.545.876 1.22 1.078 2.109"></svg:path><svg:path d="m18.5 9l3 3l-3 3m2-3h-7M9 2.498v19m-6.502-13h6.5m-6.5 7h6.5"></svg:path></svg:g>`,
})
export class HugeiconsInsertColumnRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
