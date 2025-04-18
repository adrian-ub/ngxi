import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPrayerRug01Icon],svg[hugeicons-prayer-rug-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 21h11c1.886 0 2.828 0 3.414-.586S20 18.886 20 17v-6c0-1.886 0-2.828-.586-3.414S17.886 7 16 7H8"></svg:path><svg:path d="M8 21H4a2 2 0 0 1-2-2m0 0a2 2 0 0 1 2-2v0c1.886 0 2.828 0 3.414-.586S8 14.886 8 13V8c0-1.886 0-2.828-.586-3.414S5.886 4 4 4v0a2 2 0 0 0-2 2zm9-2.643h.331c.29 0 .435 0 .557.029c.122.028.355.145.82.377c1.602.802 2.671-.6 3.596-1.736c.464-.57.696-.855.696-1.027s-.232-.457-.696-1.027c-.925-1.136-1.994-2.539-3.596-1.736c-.465.232-.698.349-.82.377c-.122.03-.267.03-.557.03H11M20 16h2m-2 4h2m-2-8h2m-2-4h2"></svg:path></svg:g>`,
})
export class HugeiconsPrayerRug01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
