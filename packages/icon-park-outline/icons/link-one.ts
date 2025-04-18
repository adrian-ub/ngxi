import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLinkOneIcon],svg[icon-park-outline-link-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m26.24 16.373l-9.14-9.14c-2.661-2.661-7.035-2.603-9.768.131s-2.793 7.107-.131 9.769l7.935 7.935m17.767-2.065l7.935 7.935c2.661 2.662 2.603 7.035-.13 9.769c-2.735 2.734-7.108 2.792-9.77.13l-9.14-9.14"></svg:path><svg:path d="M26.11 26.142c2.733-2.734 2.792-7.108.13-9.769m-4.441 5.425c-2.734 2.734-2.792 7.108-.131 9.769"></svg:path></svg:g>`,
})
export class IconParkOutlineLinkOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
