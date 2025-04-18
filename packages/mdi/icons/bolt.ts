import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBoltIcon],svg[mdi-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17.7V21h-4v-.7zM17 3H7v3h10zm-2 4l-1 .7V7h-4v3.3L9 11v1l6-3.9zm0 4l-1 .7v-2l-4 2.7v2L9 15v1l6-3.9zm0 4l-1 .7v-2l-4 2.7v2L9 19v1l6-3.9z"></svg:path>`,
})
export class MdiBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
