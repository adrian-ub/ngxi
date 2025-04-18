import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidQueueListIcon],svg[heroicons-solid-queue-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.5A2.5 2.5 0 0 1 4.5 2h11a2.5 2.5 0 0 1 0 5h-11A2.5 2.5 0 0 1 2 4.5Zm.75 4.583a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75Zm0 3.58a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75Zm0 3.587a.75.75 0 0 0 0 1.5h14.5a.75.75 0 1 0 0-1.5H2.75Z"></svg:path>`,
})
export class HeroiconsSolidQueueListIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
