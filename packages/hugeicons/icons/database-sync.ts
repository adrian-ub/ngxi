import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDatabaseSyncIcon],svg[hugeicons-database-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m13 17l1.023.594c.514-1.866 2.488-2.974 4.409-2.474a3.58 3.58 0 0 1 2.218 1.686M22 20l-1.023-.594c-.514 1.866-2.488 2.974-4.409 2.474a3.58 3.58 0 0 1-2.186-1.63"></svg:path><svg:path d="M21 13v-1.5c0-4.478 0-6.718-1.391-8.109S15.979 2 11.5 2C7.022 2 4.782 2 3.391 3.391S2 7.021 2 11.5c0 4.478 0 6.718 1.391 8.109C4.618 20.835 6.503 20.98 10 20.998h1M2 11.5h19m-8.5-5h4"></svg:path><svg:circle cx="7.75" cy="6.5" r="1.25"></svg:circle><svg:circle cx="7.75" cy="16.5" r="1.25"></svg:circle></svg:g>`,
})
export class HugeiconsDatabaseSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
