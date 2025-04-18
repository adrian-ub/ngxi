import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkLockActiveIcon],svg[nrk-lock-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 7a4 4 0 1 1 8 0v1h2V7A6 6 0 0 0 6 7v1h2z"></svg:path><svg:path fill-rule="evenodd" d="M21 22V10H3v12zm-8-8v5h-2v-5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class NrkLockActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
