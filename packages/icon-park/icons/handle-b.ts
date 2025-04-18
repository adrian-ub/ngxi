import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHandleBIcon],svg[icon-park-handle-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" d="M24.7918 23C27.6682 23 30 20.7614 30 18C30 15.2386 27.6682 13 24.7918 13H18V23H24.7918Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M26.831 35C29.6857 35 32 32.3137 32 29C32 25.6863 29.6857 23 26.831 23H18V35H26.831Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkHandleBIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
