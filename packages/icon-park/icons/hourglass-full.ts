import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHourglassFullIcon],svg[icon-park-hourglass-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M7 4H41"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M7 44H41"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M11 44C13.6667 30.6611 18 23.9944 24 24C30 24.0056 34.3333 30.6722 37 44H11Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M37 4C34.3333 17.3389 30 24.0056 24 24C18 23.9944 13.6667 17.3278 11 4H37Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 15H27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19 38H29"></svg:path></svg:g>`,
})
export class IconParkHourglassFullIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
