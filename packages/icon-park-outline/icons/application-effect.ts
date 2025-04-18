import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineApplicationEffectIcon],svg[icon-park-outline-application-effect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 40.833a11.96 11.96 0 0 0 8 3.056c6.627 0 12-5.373 12-12c0-5.301-3.437-9.8-8.204-11.387"></svg:path><svg:path d="M27.171 27.5c.535 1.359.829 2.84.829 4.39c0 6.627-5.373 12-12 12c-6.628 0-12-5.373-12-12c0-5.316 3.455-9.824 8.242-11.4"></svg:path><svg:path d="M24 27.89c6.627 0 12-5.373 12-12c0-6.628-5.373-12-12-12s-12 5.372-12 12c0 6.627 5.373 12 12 12"></svg:path></svg:g>`,
})
export class IconParkOutlineApplicationEffectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
