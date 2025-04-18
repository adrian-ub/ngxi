import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilTapeIcon],svg[uil-tape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 7a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2m1-10h-2a7 7 0 0 0-7 7v3h-1a1 1 0 0 0 0 2h1v2h-4a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1h12a7 7 0 0 0 7-7v-2a7 7 0 0 0-7-7m5 9a5 5 0 0 1-5 5h-7v-7a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5Z"></svg:path>`,
})
export class UilTapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
