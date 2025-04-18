import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPerfumeIcon],svg[icon-park-perfume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="16" height="10" x="16" y="4" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="3"></svg:rect><svg:rect width="36" height="24" x="6" y="20" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="12"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 32.9999C9.04225 29.1325 18 29.9999 24 31.9999C30 33.9999 38 36.9999 42 31.9999"></svg:path><svg:path fill="#fff" d="M25 8.99999C25 9.55228 24.5523 9.99999 24 9.99999C23.4477 9.99999 23 9.55228 23 8.99999C23 8.44771 23.4477 7.99999 24 7.99999C24.5523 7.99999 25 8.44771 25 8.99999Z"></svg:path></svg:g>`,
})
export class IconParkPerfumeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
