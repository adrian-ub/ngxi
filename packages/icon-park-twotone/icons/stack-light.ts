import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneStackLightIcon],svg[icon-park-twotone-stack-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTStackLight0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 4h14v30H17z"></svg:path><svg:path stroke-linecap="round" d="M17 14h14M17 24h14M6.879 7.879l4.243 4.243M6.879 33.121l4.243-4.243M41.121 7.879l-4.242 4.243m4.242 20.999l-4.242-4.243M4 21h6m28 0h6"></svg:path><svg:path fill="#555" d="M20 34h8v10h-8z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTStackLight0)"></svg:path>`,
})
export class IconParkTwotoneStackLightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
