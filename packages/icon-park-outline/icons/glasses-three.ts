import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineGlassesThreeIcon],svg[icon-park-outline-glasses-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="12" cy="33" r="7"></svg:circle><svg:path stroke-linecap="round" d="M29 33c0-3.314-1.5-6-5-6s-5 2.686-5 6"></svg:path><svg:circle cx="36" cy="33" r="7"></svg:circle><svg:path stroke-linecap="round" d="M14 8h-2a6 6 0 0 0-6 6v8M34 8h2a6 6 0 0 1 6 6v8"></svg:path></svg:g>`,
})
export class IconParkOutlineGlassesThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
