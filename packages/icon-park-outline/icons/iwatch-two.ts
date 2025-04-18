import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineIwatchTwoIcon],svg[icon-park-outline-iwatch-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="4" d="M15.417 10.5C18.237 7.7 21.942 6 26 6c8.837 0 16 8.059 16 18s-7.163 18-16 18c-4.058 0-7.763-1.7-10.583-4.5"></svg:path><svg:rect width="10" height="28" x="6" y="10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:rect width="4" height="4" x="13" y="18" fill="currentColor" rx="2" transform="rotate(90 13 18)"></svg:rect><svg:rect width="4" height="4" x="13" y="25" fill="currentColor" rx="2" transform="rotate(90 13 25)"></svg:rect></svg:g>`,
})
export class IconParkOutlineIwatchTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
