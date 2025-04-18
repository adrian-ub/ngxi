import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCrabIcon],svg[icon-park-crab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 16.9998C5 11.9998 6 1.99979 17.0008 5.99977C17.9464 9.78224 15 16.9998 5 16.9998Z"></svg:path><svg:path d="M43 16.9998C43.0006 11.9998 42 1.99979 31 5.99978C30.0544 9.78224 32.9994 16.9998 43 16.9998Z"></svg:path><svg:rect width="32" height="20" x="8" y="22" fill="#2F88FF" rx="10"></svg:rect><svg:path d="M27 22V18"></svg:path><svg:path d="M21 22V18"></svg:path><svg:path d="M43 17C44 20 44 26 40 29"></svg:path><svg:path d="M5 17C4 20 5 25 8 29"></svg:path><svg:path d="M30 42H44L40 33"></svg:path><svg:path d="M18 42H4L8 33"></svg:path></svg:g>`,
})
export class IconParkCrabIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
