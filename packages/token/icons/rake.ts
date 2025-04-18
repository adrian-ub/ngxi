import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenRakeIcon],svg[token-rake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.579 4.16l2.734 10.935L21 11.967v.034A9.001 9.001 0 0 1 7.46 19.77a9 9 0 0 1 .119-15.61"></svg:path><svg:path fill="currentColor" d="m9.976 3.225l2.306 8.212l8.302-2.143a9 9 0 0 0-.94-2.042L13.97 8.906l-1.535-5.895a9 9 0 0 0-2.458.22z"></svg:path>`,
})
export class TokenRakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
