import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLayoutTable02Icon],svg[hugeicons-layout-table-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.107 20.109c-1.391 1.391-3.63 1.391-8.109 1.391c-4.478 0-6.717 0-8.109-1.391C2.5 18.718 2.5 16.479 2.5 12c-.001-4.478-.001-6.717 1.39-8.109c1.392-1.39 3.63-1.39 8.109-1.39c4.478 0 6.718 0 8.109 1.39c1.391 1.392 1.391 3.63 1.391 8.11c0 4.478 0 6.717-1.391 8.108M8.998 21.5v-19m12.5 5.5h-19m19 8h-19" color="currentColor"></svg:path>`,
})
export class HugeiconsLayoutTable02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
