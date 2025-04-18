import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCupIcon],svg[icon-park-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M8.77783 17.012C8.77783 16.4531 9.23094 16 9.78988 16H33.7658C34.3247 16 34.7778 16.4531 34.7778 17.012V31C34.7778 38.1797 28.9575 44 21.7778 44V44C14.5981 44 8.77783 38.1797 8.77783 31V17.012Z"></svg:path><svg:rect width="26" height="8" x="8.778" y="23" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21.7778 4V10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13.7778 6V8"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29.7778 6V8"></svg:path><svg:path stroke-linecap="round" d="M34.7778 34C38.6438 34 41.7778 30.866 41.7778 27C41.7778 23.134 38.6438 20 34.7778 20"></svg:path></svg:g>`,
})
export class IconParkCupIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}
