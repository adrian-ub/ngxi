import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsReadingIcon],svg[flat-color-icons-reading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5C6BC0" d="M40 40c-6.9 0-16 4-16 4V22s9-4 18-4z"></svg:path><svg:path fill="#7986CB" d="M8 40c6.9 0 16 4 16 4V22s-9-4-18-4z"></svg:path><svg:g fill="#FFB74D"><svg:circle cx="24" cy="12" r="8"></svg:circle><svg:path d="M41 32h1c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1h-1c-1.7 0-3 1.3-3 3s1.3 3 3 3M7 26H6c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h1c1.7 0 3-1.3 3-3s-1.3-3-3-3"></svg:path></svg:g>`,
})
export class FlatColorIconsReadingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
