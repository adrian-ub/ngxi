import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneUTurnDownIcon],svg[icon-park-twotone-u-turn-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTUTurnDown0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M35 34V15c0-6.075-4.925-11-11-11v0c-6.075 0-11 4.925-11 11v29"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m18 39l-5 5l-5-5"></svg:path><svg:circle cx="35" cy="39" r="5" fill="#555" transform="rotate(90 35 39)"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTUTurnDown0)"></svg:path>`,
})
export class IconParkTwotoneUTurnDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
