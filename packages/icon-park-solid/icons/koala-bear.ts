import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidKoalaBearIcon],svg[icon-park-solid-koala-bear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSKoalaBear0"><svg:g fill="none"><svg:circle cx="24" cy="26" r="15" fill="#fff" stroke="#fff" stroke-width="4"></svg:circle><svg:path fill="#000" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M21 31.563C21 29.664 24 24 24 24s3 5.664 3 7.563C27 33.46 25.657 35 24 35s-3-1.539-3-3.437Z"></svg:path><svg:circle cx="17.039" cy="23.493" r="2" fill="#000"></svg:circle><svg:circle cx="31.039" cy="23.493" r="2" fill="#000"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 11.927C15.621 9.524 8.495 6.093 5.35 9.306C4.014 10.418 2.986 15.45 5.727 23L10 19.98m21-8.053c1.379-2.403 8.505-5.834 11.65-2.621c1.336 1.112 2.364 6.144-.377 13.694L38 19.98"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSKoalaBear0)"></svg:path>`,
})
export class IconParkSolidKoalaBearIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
