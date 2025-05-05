import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAmmoIcon],svg[picon-ammo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 6.5v-4h2v4m1 0v-4h2v4m1 0v-4h2v4M0 2q1-4 2 0m1 0q1-4 2 0m1 0q1-4 2 0M0 8V7h2v1m1 0V7h2v1m1 0V7h2v1"></svg:path>`,
})
export class PiconAmmoIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
