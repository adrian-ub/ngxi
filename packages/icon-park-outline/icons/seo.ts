import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSeoIcon],svg[icon-park-outline-seo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:rect width="40" height="32" x="4" y="8" rx="1.633"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 18.948c-2-2.948-5.502-1.01-5.251 2.02C11 24 15 24 15.249 27.032C15.5 30.062 12 32 10 29.051M26 18h-4v13h4m-4-6h4"></svg:path><svg:rect width="6" height="13" x="32" y="18" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect></svg:g>`,
})
export class IconParkOutlineSeoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
