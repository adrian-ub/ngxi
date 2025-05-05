import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAmmoIcon],svg[hugeicons-ammo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M9.5 8.5c0-3-1.5-6-1.5-6s-1.5 3-1.5 6zM10 11l-.5-2.5h-3L6 11zm0 0H6v7.5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0 11.5H6v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm7.5-14c0-3-1.5-6-1.5-6s-1.5 3-1.5 6zM18 11l-.5-2.5h-3L14 11zm0 0h-4v7.5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0 11.5h-4v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1z" color="currentColor"></svg:path>`,
})
export class HugeiconsAmmoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
