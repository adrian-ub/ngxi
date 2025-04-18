import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDoorHandleIcon],svg[icon-park-door-handle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="26" height="40" x="6" y="4" rx="2"></svg:rect><svg:path d="M14 34H24"></svg:path><svg:path fill="#2F88FF" d="M42 20V14H23.0004C22.0882 12.7856 20.6358 12 19 12C16.2386 12 14 14.2386 14 17C14 19.7614 16.2386 22 19 22C20.6358 22 22.0882 21.2144 23.0004 20H42Z"></svg:path></svg:g>`,
})
export class IconParkDoorHandleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
