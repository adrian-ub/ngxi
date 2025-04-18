import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSmileyFill12Icon],svg[garden-smiley-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0C2.69 0 0 2.69 0 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6m2 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M4 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m5.03 3.75a3.5 3.5 0 0 1-6.06 0a.493.493 0 0 1 .18-.68c.24-.14.55-.06.68.18C4.28 8.02 5.11 8.5 6 8.5s1.72-.48 2.17-1.25c.13-.24.44-.32.68-.18s.32.44.18.68"></svg:path>`,
})
export class GardenSmileyFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
