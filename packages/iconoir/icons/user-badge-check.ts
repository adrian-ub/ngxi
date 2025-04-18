import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirUserBadgeCheckIcon],svg[iconoir-user-badge-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2 20v-1a7 7 0 0 1 7-7v0"></svg:path><svg:path d="M15.804 12.314a1.62 1.62 0 0 1 2.392 0c.325.356.79.549 1.272.526a1.62 1.62 0 0 1 1.692 1.692c-.023.481.17.947.526 1.272c.705.642.705 1.75 0 2.392c-.356.325-.549.79-.526 1.272a1.62 1.62 0 0 1-1.692 1.692a1.62 1.62 0 0 0-1.272.526a1.62 1.62 0 0 1-2.392 0a1.62 1.62 0 0 0-1.272-.526a1.62 1.62 0 0 1-1.692-1.692a1.62 1.62 0 0 0-.527-1.272a1.62 1.62 0 0 1 0-2.392c.357-.325.55-.79.527-1.272a1.62 1.62 0 0 1 1.692-1.692c.481.023.947-.17 1.272-.527Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15.364 17l1.09 1.09l2.182-2.18M9 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path></svg:g>`,
})
export class IconoirUserBadgeCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
