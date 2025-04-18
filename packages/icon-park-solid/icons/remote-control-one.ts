import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRemoteControlOneIcon],svg[icon-park-solid-remote-control-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="4" d="M11 5.446C11 4.647 11.647 4 12.446 4h23.108C36.353 4 37 4.647 37 5.446V31c0 7.18-5.82 13-13 13s-13-5.82-13-13z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 16h3m8 0h3"></svg:path><svg:circle cx="17" cy="10" r="2" fill="currentColor"></svg:circle><svg:circle cx="24" cy="31" r="7" fill="currentColor" stroke="currentColor" stroke-width="4"></svg:circle></svg:g>`,
})
export class IconParkSolidRemoteControlOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
