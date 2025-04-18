import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenArrowTrendingStroke16Icon],svg[garden-arrow-trending-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 3a.5.5 0 0 1 .492.41L16 3.5v4a.5.5 0 0 1-.992.09L15 7.5V4.706L9.854 9.854a.5.5 0 0 1-.638.057l-.07-.057L6.5 7.207L.854 12.854a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07l6-6a.5.5 0 0 1 .638-.057l.07.057L9.5 8.793L14.292 4H11.5a.5.5 0 0 1-.492-.41L11 3.5a.5.5 0 0 1 .41-.492L11.5 3z"></svg:path>`,
})
export class GardenArrowTrendingStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
