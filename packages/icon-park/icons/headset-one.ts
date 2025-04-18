import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHeadsetOneIcon],svg[icon-park-headset-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M36 32C40.4183 32 44 28.4183 44 24C44 19.5817 40.4183 16 36 16"></svg:path><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M36 32V32C40.4183 32 44 28.4183 44 24C44 19.5817 40.4183 16 36 16"></svg:path><svg:path fill="#2F88FF" d="M12 16C7.58172 16 4 19.5817 4 24C4 28.4183 7.58172 32 12 32"></svg:path><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M12 16C7.58172 16 4 19.5817 4 24C4 28.4183 7.58172 32 12 32V32"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 32V31.5V29V24V16C12 9.37258 17.3726 4 24 4C30.6274 4 36 9.37258 36 16V32C36 38.6274 30.6274 44 24 44"></svg:path></svg:g>`,
})
export class IconParkHeadsetOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
