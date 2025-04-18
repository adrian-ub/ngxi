import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSeoIcon],svg[icon-park-solid-seo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSeo0"><svg:g fill="none" stroke-width="4"><svg:rect width="40" height="32" x="4" y="8" fill="#fff" stroke="#fff" rx="1.633"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M16 18.948c-2-2.948-5.502-1.01-5.251 2.02C11 24 15 24 15.249 27.032C15.5 30.062 12 32 10 29.051M26 18h-4v13h4m-4-6h4"></svg:path><svg:rect width="6" height="13" x="32" y="18" stroke="#000" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSeo0)"></svg:path>`,
})
export class IconParkSolidSeoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
