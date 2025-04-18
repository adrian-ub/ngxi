import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsPlusAltIcon],svg[dashicons-plus-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.8 4.2c3.2 3.21 3.2 8.39 0 11.6a8.21 8.21 0 0 1-11.6 0a8.21 8.21 0 0 1 0-11.6C7.41 1 12.59 1 15.8 4.2m-4.3 11.3v-4h4v-3h-4v-4h-3v4h-4v3h4v4z"></svg:path>`,
})
export class DashiconsPlusAltIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
