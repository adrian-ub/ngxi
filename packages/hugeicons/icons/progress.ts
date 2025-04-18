import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsProgressIcon],svg[hugeicons-progress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.75 12.25C3.75 7.69 7.44 4 12 4s8.25 3.69 8.25 8.25S16.56 20.5 12 20.5s-8.25-3.69-8.25-8.25M12 2.5c-5.38 0-9.75 4.37-9.75 9.75S6.62 22 12 22s9.75-4.37 9.75-9.75S17.38 2.5 12 2.5m0 3c-.41 0-.75.34-.75.75v5.57L6.43 14.6a.743.743 0 0 0-.27 1.02a6.75 6.75 0 0 0 2.47 2.48c1.02.59 2.19.9 3.37.9s2.35-.31 3.38-.9c1.02-.6 1.87-1.45 2.47-2.47c.59-1.03.9-2.2.9-3.38s-.31-2.35-.9-3.38a6.96 6.96 0 0 0-2.47-2.47c-1.03-.59-2.19-.9-3.38-.9m.75 6.75v-5.2c.66.1 1.3.32 1.88.65c.79.46 1.46 1.13 1.92 1.93c.46.79.7 1.7.7 2.62s-.24 1.83-.7 2.62c-.46.8-1.13 1.47-1.92 1.93c-.8.46-1.71.7-2.63.7a5.22 5.22 0 0 1-4.12-2l4.5-2.6c.23-.13.37-.38.37-.65" color="currentColor"></svg:path>`,
})
export class HugeiconsProgressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
