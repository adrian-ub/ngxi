import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSearch26Icon],svg[garden-search-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:circle cx="11" cy="11" r="7"></svg:circle><svg:path d="m16 16l6 6"></svg:path></svg:g>`,
})
export class GardenSearch26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
