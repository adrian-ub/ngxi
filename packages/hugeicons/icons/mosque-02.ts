import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMosque02Icon],svg[hugeicons-mosque-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5.465 13C2.348 9.5 7.665 7.75 9 6c1.336 1.75 6.652 3.5 3.535 7zm12.298-6c-2.059-2.5.605-3.75 1.487-5c.883 1.25 3.546 2.5 1.487 5zM10 3.657A1.172 1.172 0 1 1 8.343 2M9 4v2m8 11v5H4.143c-1.01 0-1.515 0-1.83-.293C2 21.414 2 20.943 2 20v-3c0-1.886 0-2.828.628-3.414C3.255 13 4.265 13 6.286 13h6.428c2.02 0 3.03 0 3.658.586S17 15.114 17 17"></svg:path><svg:path d="M15 22h2.687c2.15 0 3.226 0 3.846-.658s.514-1.685.3-3.74L20.728 7h-3.124l-.972 6.5M7 22v-2c-.017-3 2.5-4 2.5-4s2.517 1 2.5 4v2"></svg:path></svg:g>`,
})
export class HugeiconsMosque02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
