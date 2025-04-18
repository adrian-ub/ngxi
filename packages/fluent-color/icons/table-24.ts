import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorTable24Icon],svg[fluent-color-table-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="18" height="18" x="3" y="3" fill="url(#fluentColorTable240)" rx="4"></svg:rect><svg:path fill="url(#fluentColorTable241)" d="M9.5 21h5v-5h-5zm6.5 0h1.75A3.25 3.25 0 0 0 21 17.75V16h-5zm5-6.5v-5h-5v5zM21 8V6.25A3.25 3.25 0 0 0 17.75 3H16v5zm-6.5-5h-5v5h5zM8 3H6.25A3.25 3.25 0 0 0 3 6.25V8h5zM3 9.5v5h5v-5zM3 16v1.75A3.25 3.25 0 0 0 6.25 21H8v-5zm11.5-6.5v5h-5v-5z"></svg:path><svg:defs><svg:lineargradient id="fluentColorTable240" x1="4.286" x2="19.714" y1="4.286" y2="19.714" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B0F098"></svg:stop><svg:stop offset="1" stop-color="#98F0B0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorTable241" x1="3" x2="21" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#42B870"></svg:stop><svg:stop offset="1" stop-color="#1A7F7C"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorTable24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
