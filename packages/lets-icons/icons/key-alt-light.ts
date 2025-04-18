import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsKeyAltLightIcon],svg[lets-icons-key-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M3.5 7.5c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C5.4 3.5 6.1 3.5 7.5 3.5h9c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C20.5 5.4 20.5 6.1 20.5 7.5v9c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092c-.535.273-1.235.273-2.635.273h-9c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C3.5 18.6 3.5 17.9 3.5 16.5z"></svg:path><svg:circle cx="8.5" cy="11.5" r="2"></svg:circle><svg:path stroke-linecap="round" d="M10.5 11.5h5m2 2v-1.85a.15.15 0 0 0-.15-.15H15.5m0 0v2"></svg:path></svg:g>`,
})
export class LetsIconsKeyAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
