import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenArrowRetweetStroke16Icon],svg[garden-arrow-retweet-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.784 2.089l.07.057l2 2a.5.5 0 0 1-.638.765l-.07-.057l-1.145-1.145L3 11.5a1.5 1.5 0 0 0 1.356 1.493L4.5 13h3a.5.5 0 0 1 .09.992L7.5 14h-3a2.5 2.5 0 0 1-2.495-2.336L2 11.5l.001-7.793L.854 4.854a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07l2-2a.5.5 0 0 1 .638-.057M11.5 2a2.5 2.5 0 0 1 2.495 2.336L14 4.5l-.001 7.793l1.147-1.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07l-2 2a.5.5 0 0 1-.638.057l-.07-.057l-2-2a.5.5 0 0 1 .638-.765l.07.057l1.145 1.145L13 4.5a1.5 1.5 0 0 0-1.356-1.493L11.5 3h-3a.5.5 0 0 1-.09-.992L8.5 2z"></svg:path>`,
})
export class GardenArrowRetweetStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
