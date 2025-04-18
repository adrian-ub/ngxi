import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEscapepodIcon],svg[arcticons-escapepod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.68 42.89L5.5 31.7l9.7-4.52h0a10.15 10.15 0 0 0 6.14 5.39Zm6.16-14.67a3.4 3.4 0 1 1 3.39-3.41h0a3.4 3.4 0 0 1-3.39 3.41m-1.49-15a13 13 0 0 1 13.06 13v.1M21.35 5.11A21.15 21.15 0 0 1 42.5 26.25v.06"></svg:path>`,
})
export class ArcticonsEscapepodIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
