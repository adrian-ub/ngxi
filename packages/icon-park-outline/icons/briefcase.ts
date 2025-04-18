import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBriefcaseIcon],svg[icon-park-outline-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M32 16c0-6.075-3.582-12-8-12s-8 5.925-8 12m-7 0h30l1 12H27v-3h-6v3H8zM8 28L6 42h36l-2-14"></svg:path><svg:path d="M21 25h6v6h-6z"></svg:path></svg:g>`,
})
export class IconParkOutlineBriefcaseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
