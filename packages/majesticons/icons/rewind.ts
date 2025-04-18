import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsRewindIcon],svg[majesticons-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2.933 10.8l6.667-5c.989-.742 2.4-.036 2.4 1.2v3l5.6-4.2c.989-.742 2.4-.036 2.4 1.2v10c0 1.236-1.411 1.942-2.4 1.2L12 14v3c0 1.236-1.411 1.942-2.4 1.2l-6.667-5c-.8-.6-.8-1.8 0-2.4z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsRewindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
