import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignRightSquareTwotoneIcon],svg[ant-design-right-square-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-40 728H184V184h656z"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M184 840h656V184H184zm216-196.9c0-10.2 4.9-19.9 13.2-25.9L558.6 512L413.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.7 0 12.9l-246 178c-5.3 3.9-12.7.1-12.7-6.4z"></svg:path><svg:path fill="currentColor" d="m412.7 696.4l246-178c4.4-3.2 4.4-9.7 0-12.9l-246-178c-5.3-3.8-12.7 0-12.7 6.5v46.9c0 10.3 4.9 19.9 13.2 25.9L558.6 512L413.2 617.2c-8.3 6-13.2 15.7-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.4"></svg:path>`,
})
export class AntDesignRightSquareTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
