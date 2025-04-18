import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDivingBottleIcon],svg[icon-park-diving-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke-miterlimit="2" d="M4 40L6.5 41.3514C8.1 42.2162 9.9 42.2162 11.5 41.3514C13.1 40.4865 14.9 40.4865 16.5 41.3514C18.1 42.2162 19.9 42.2162 21.5 41.3514C23.1 40.4865 24.9 40.4865 26.5 41.3514C28.1 42.2162 29.9 42.2162 31.5 41.3514C33.1 40.4865 34.9 40.4865 36.5 41.3514C38.1 42.2162 39.9 42.2162 41.5 41.3514L44 40"></svg:path><svg:path stroke-miterlimit="2" d="M14 11V4"></svg:path><svg:path stroke-miterlimit="2" d="M31 11V4"></svg:path><svg:path stroke-miterlimit="2" d="M21 8V4"></svg:path><svg:path stroke-miterlimit="2" d="M38 8V4"></svg:path><svg:line x1="12" x2="20" y1="6" y2="6"></svg:line><svg:line x1="29" x2="37" y1="6" y2="6"></svg:line><svg:rect width="8" height="24" x="10" y="11" rx="4"></svg:rect><svg:rect width="8" height="24" x="27" y="11" rx="4"></svg:rect><svg:path fill="#2F88FF" d="M27 15C27 12.7909 28.7909 11 31 11C33.2091 11 35 12.7909 35 15V19H27V15Z"></svg:path><svg:path fill="#2F88FF" d="M10 15C10 12.7909 11.7909 11 14 11C16.2091 11 18 12.7909 18 15V19H10V15Z"></svg:path></svg:g>`,
})
export class IconParkDivingBottleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
