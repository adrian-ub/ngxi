import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQuickBibleIcon],svg[arcticons-quick-bible-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 42.138h39M24 36.994V5.862m-9.533 8.345h19.066M20.98 40.438L4.953 39.65l.615-4.542Zm-2.565-2.99l-9.86-5.599m18.465 8.589l16.028-.788l-.615-4.542Zm2.565-2.99l9.86-5.599"></svg:path>`,
})
export class ArcticonsQuickBibleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
