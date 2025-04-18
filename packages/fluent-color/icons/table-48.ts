import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorTable48Icon],svg[fluent-color-table-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="36" height="36" x="6" y="6" fill="url(#fluentColorTable480)" rx="8.5"></svg:rect><svg:path fill="url(#fluentColorTable481)" d="M12.25 6A6.25 6.25 0 0 0 6 12.25v4.25h10.5V6zM19 6v10.5h10V6zm-2.5 13H6v10h10.5zM19 29V19h10v10zm-2.5 2.5H6v4.25A6.25 6.25 0 0 0 12.25 42h4.25zM19 42h10V31.5H19zm12.5 0V31.5H42v4.25A6.25 6.25 0 0 1 35.75 42zM42 19v10H31.5V19zm0-2.5v-4.25A6.25 6.25 0 0 0 35.75 6H31.5v10.5z"></svg:path><svg:defs><svg:lineargradient id="fluentColorTable480" x1="8.571" x2="39.429" y1="8.571" y2="39.429" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B0F098"></svg:stop><svg:stop offset="1" stop-color="#98F0B0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorTable481" x1="6" x2="42" y1="6" y2="42" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#42B870"></svg:stop><svg:stop offset="1" stop-color="#1A7F7C"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorTable48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
