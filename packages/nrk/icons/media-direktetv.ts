import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaDirektetvIcon],svg[nrk-media-direktetv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 3h22v16H1zm2 2v12h18V5zm13 18H8v-2h8zM8 8.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"></svg:path>`,
})
export class NrkMediaDirektetvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
