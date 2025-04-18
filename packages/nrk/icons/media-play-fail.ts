import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaPlayFailIcon],svg[nrk-media-play-fail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.16 19.893L14 22H6l5.16-9.38zM9.317 2l7.841 14.256L19.5 12L14 2z" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.211 22L6.227 2H8.23l10.984 20z" clip-rule="evenodd"></svg:path>`,
})
export class NrkMediaPlayFailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
