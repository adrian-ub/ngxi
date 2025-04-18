import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPin24Icon],svg[fluent-color-pin-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPin240)" fill-rule="evenodd" d="m9.53 15.53l-5.25 5.25a.75.75 0 1 1-1.06-1.06l5.25-5.25z" clip-rule="evenodd"></svg:path><svg:path fill="url(#fluentColorPin241)" d="m21.068 7.758l-4.826-4.826a2.75 2.75 0 0 0-4.404.715l-2.435 4.87a.75.75 0 0 1-.426.374l-4.166 1.44a1.25 1.25 0 0 0-.476 2.065l7.27 7.27a1.25 1.25 0 0 0 2.065-.477l1.44-4.166a.75.75 0 0 1 .373-.426l4.87-2.435a2.75 2.75 0 0 0 .715-4.404"></svg:path><svg:path fill="url(#fluentColorPin242)" fill-opacity=".8" d="m21.068 7.758l-4.826-4.826a2.75 2.75 0 0 0-4.404.715l-2.435 4.87a.75.75 0 0 1-.426.374l-4.166 1.44a1.25 1.25 0 0 0-.476 2.065l7.27 7.27a1.25 1.25 0 0 0 2.065-.477l1.44-4.166a.75.75 0 0 1 .373-.426l4.87-2.435a2.75 2.75 0 0 0 .715-4.404"></svg:path><svg:defs><svg:lineargradient id="fluentColorPin240" x1="4.633" x2="9.496" y1="19.367" y2="15.648" gradientUnits="userSpaceOnUse"><svg:stop offset=".449" stop-color="#7B7BFF"></svg:stop><svg:stop offset="1" stop-color="#102784"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPin241" x1="4.608" x2="16.965" y1="5.483" y2="18.322" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#43E5CA"></svg:stop><svg:stop offset="1" stop-color="#1384B1"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorPin242" cx="0" cy="0" r="1" gradientTransform="rotate(47.579 -9.812 28.432)scale(7.95948 19.9685)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E362F8"></svg:stop><svg:stop offset="1" stop-color="#96F" stop-opacity="0"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorPin24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
