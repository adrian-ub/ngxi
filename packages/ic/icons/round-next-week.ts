import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundNextWeekIcon],svg[ic-round-next-week-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2M10 5h4v2h-4zm.5 13a.7.7 0 0 1 0-1l2.5-2.5l-2.5-2.5c-.28-.28-.28-.72 0-1s.72-.28 1 0l3.15 3.15c.2.2.2.51 0 .71L11.5 18a.7.7 0 0 1-1 0"></svg:path>`,
})
export class IcRoundNextWeekIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
