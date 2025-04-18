import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerKeyframesIcon],svg[tabler-keyframes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9.225 18.412A1.6 1.6 0 0 1 8 19c-.468 0-.914-.214-1.225-.588l-4.361-5.248a1.844 1.844 0 0 1 0-2.328l4.361-5.248A1.6 1.6 0 0 1 8 5c.468 0 .914.214 1.225.588l4.361 5.248a1.844 1.844 0 0 1 0 2.328zM17 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328L17 19"></svg:path><svg:path d="m13 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328L13 19"></svg:path></svg:g>`,
})
export class TablerKeyframesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
