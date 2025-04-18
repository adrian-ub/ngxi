import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagTz1x1Icon],svg[flag-tz-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagTz1x10"><svg:path fill-opacity=".7" d="M102.9 0h496v496H103z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#flagTz1x10)" transform="translate(-106.2)scale(1.0321)"><svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="#09f" d="M0 0h744.1v496H0z"></svg:path><svg:path fill="#090" d="M0 0h744.1L0 496z"></svg:path><svg:path fill="#000001" d="M0 496h165.4L744 103.4V0H578.7L0 392.7v103.4z"></svg:path><svg:path fill="#ff0" d="M0 378L567 0h56L0 415.3v-37.2zm121.1 118l623-415.3V118L177 496z"></svg:path></svg:g></svg:g>`,
})
export class FlagTz1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
