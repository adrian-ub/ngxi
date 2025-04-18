import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFullLightIcon],svg[lets-icons-full-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v-.5h-.5V4zm7.646 8.354a.5.5 0 0 0 .708-.708zM4.5 10V4h-1v6zM4 4.5h6v-1H4zm-.354-.146l8 8l.708-.708l-8-8z"></svg:path><svg:path fill="currentColor" d="M4 20v.5h-.5V20zm7.646-8.354a.5.5 0 0 1 .708.708zM4.5 14v6h-1v-6zM4 19.5h6v1H4zm-.354.146l8-8l.708.708l-8 8z"></svg:path><svg:path fill="currentColor" d="M20 4v-.5h.5V4zm-7.646 8.354a.5.5 0 0 1-.708-.708zM19.5 10V4h1v6zm.5-5.5h-6v-1h6zm.354-.146l-8 8l-.708-.708l8-8z"></svg:path><svg:path fill="currentColor" d="M20 20v.5h.5V20zm-7.646-8.354a.5.5 0 0 0-.708.708zM19.5 14v6h1v-6zm.5 5.5h-6v1h6zm.354.146l-8-8l-.708.708l8 8z"></svg:path>`,
})
export class LetsIconsFullLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
