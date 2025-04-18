import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPeopleDownloadIcon],svg[icon-park-people-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z"></svg:path><svg:path stroke-linecap="round" d="M37 40V30"></svg:path><svg:path stroke-linecap="round" d="M33 36L37 40L41 36"></svg:path><svg:path stroke-linecap="round" d="M27 28H18.8C14.3196 28 12.0794 28 10.3681 28.8719C8.86278 29.6389 7.63893 30.8628 6.87195 32.3681C6 34.0794 6 36.3196 6 40.8V42H27"></svg:path></svg:g>`,
})
export class IconParkPeopleDownloadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
