import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMobileViewIcon],svg[carbon-mobile-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="23" cy="24" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M30.777 23.479C29.354 20.149 26.3 18 23 18s-6.354 2.15-7.777 5.479L15 24l.223.522C16.646 27.85 19.7 30 23 30s6.354-2.15 7.777-5.478L31 24zM23 28c-2.206 0-4-1.794-4-4s1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4"></svg:path><svg:path fill="currentColor" d="M14 28H9V8h14v7h2V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v24c0 1.103.897 2 2 2h5zM9 4h14v2H9z"></svg:path>`,
})
export class CarbonMobileViewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
