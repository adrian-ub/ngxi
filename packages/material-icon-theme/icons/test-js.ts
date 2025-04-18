import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeTestJsIcon],svg[material-icon-theme-test-js-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffca28" d="M20 4v2h-2v4.531l.264.461l7.473 13.078a2 2 0 0 1 .263.992V26a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-.938a2 2 0 0 1 .264-.992l7.473-13.078l.263-.46V6h-2V4zm0-2h-8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2v2L4.527 23.078A4 4 0 0 0 4 25.062V26a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-.938a4 4 0 0 0-.527-1.984L20 10V8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"></svg:path><svg:circle cx="17" cy="17" r="1" fill="#ffca28"></svg:circle><svg:path fill="#ffca28" d="M19.72 20.715a1 1 0 0 0-1.134-.318a5 5 0 0 1-1.18.262a3.95 3.95 0 0 1-1.862-.292a2.74 2.74 0 0 0-3.371.489a2 2 0 0 0-.237.35L10 24h12Z"></svg:path>`,
})
export class MaterialIconThemeTestJsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
