import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsRefresh2LightIcon],svg[lets-icons-refresh-2-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="m14 15l-4 4l4 4"></svg:path><svg:path stroke-linecap="round" d="M18.062 8.5a7 7 0 0 1-6.937 10.445"></svg:path><svg:path d="m10 9l4-4l-4-4"></svg:path><svg:path stroke-linecap="round" d="M5.938 15.5a7 7 0 0 1 7.158-10.414"></svg:path></svg:g>`,
})
export class LetsIconsRefresh2LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
