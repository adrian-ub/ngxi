import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedNexaIcon],svg[token-branded-nexa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFFD9D" d="m12 15.44l9-9.529l-9 14.824z"></svg:path><svg:path fill="#B6761C" d="M12 15.44L3 5.911l9 14.824z"></svg:path><svg:path fill="#FFE144" d="M21 5.911H3l9 9.53z"></svg:path><svg:path fill="#B6761C" d="M15.705 8.03H8.293l3.706 3.705z"></svg:path><svg:path fill="#FFFD9D" d="m12 7.279l4.235-4.013L12 10.148z"></svg:path><svg:path fill="#B6761C" d="M11.999 7.279L7.764 3.266l4.235 6.882z"></svg:path><svg:path fill="#FFE144" d="M16.234 3.266h-8.47l4.235 4.013z"></svg:path></svg:g>`,
})
export class TokenBrandedNexaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
