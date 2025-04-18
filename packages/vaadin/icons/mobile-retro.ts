import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinMobileRetroIcon],svg[vaadin-mobile-retro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 0h-1v2H4v14h7zM6 14H5v-1h1zm0-2H5v-1h1zm0-2H5V9h1zm2 4H7v-1h1zm0-2H7v-1h1zm0-2H7V9h1zm2 4H9v-1h1zm0-2H9v-1h1zm0-2H9V9h1zm0-2H5V4h5z"></svg:path>`,
})
export class VaadinMobileRetroIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
