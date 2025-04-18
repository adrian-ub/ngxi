import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkUnlockActiveIcon],svg[nrk-unlock-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.08 5.199A4.002 4.002 0 0 1 16 6v2h2V6A6 6 0 0 0 6.12 4.801S6 5.5 6 6h2c0-.5.08-.801.08-.801"></svg:path><svg:path fill-rule="evenodd" d="M21 10H3v12h18zm-8 4v5h-2v-5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class NrkUnlockActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
