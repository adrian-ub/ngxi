import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneDeleteFiveIcon],svg[icon-park-twotone-delete-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTDeleteFive0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M8 11h32M18 5h12"></svg:path><svg:path fill="#555" d="M12 17h24v23a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3z"></svg:path><svg:path stroke-linecap="round" d="m20 25l8 8m0-8l-8 8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTDeleteFive0)"></svg:path>`,
})
export class IconParkTwotoneDeleteFiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
