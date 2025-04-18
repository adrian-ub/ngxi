import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenArrowTrendingStroke12Icon],svg[garden-arrow-trending-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2a.5.5 0 0 1 .492.41L12 2.5v3a.5.5 0 0 1-.992.09L11 5.5V3.706L6.854 7.854a.5.5 0 0 1-.638.057l-.07-.057L4.5 6.207L.854 9.854a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07l4-4a.5.5 0 0 1 .638-.057l.07.057L6.5 6.793L10.292 3H8.5a.5.5 0 0 1-.492-.41L8 2.5a.5.5 0 0 1 .41-.492L8.5 2z"></svg:path>`,
})
export class GardenArrowTrendingStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
