import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEightKeyIcon],svg[icon-park-eight-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M24 22C26.2091 22 28 20.2091 28 18C28 15.7909 26.2091 14 24 14C21.7909 14 20 15.7909 20 18C20 20.2091 21.7909 22 24 22Z"></svg:path><svg:path stroke="#fff" d="M24 33C26.7614 33 29 30.7614 29 28C29 25.2386 26.7614 23 24 23C21.2386 23 19 25.2386 19 28C19 30.7614 21.2386 33 24 33Z"></svg:path></svg:g>`,
})
export class IconParkEightKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
