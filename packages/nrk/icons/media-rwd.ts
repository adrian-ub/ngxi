import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaRwdIcon],svg[nrk-media-rwd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.78 7l-3.5 5l3.5 5h3.051l-3.5-5l3.5-5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m14.78 7l-3.5 5l3.5 5h3.051l-3.5-5l3.5-5z" clip-rule="evenodd"></svg:path>`,
})
export class NrkMediaRwdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
