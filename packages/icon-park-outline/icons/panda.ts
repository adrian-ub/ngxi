import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePandaIcon],svg[icon-park-outline-panda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:ellipse cx="24" cy="27" rx="18" ry="17"></svg:ellipse><svg:ellipse cx="16.933" cy="24.64" rx="3" ry="4" transform="rotate(15 16.933 24.64)"></svg:ellipse><svg:ellipse rx="3" ry="4" transform="scale(-1 1)rotate(15 -109.047 -105.16)"></svg:ellipse><svg:path stroke-linecap="round" d="M41 20.999c3.124-3.124 3.438-8.219.313-11.343S32.124 6.876 29 10M7 21c-3.124-3.125-3.468-8.22-.344-11.343C9.781 6.532 15.876 6.875 19 10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 35c.5 1.294 2.2 3.277 5 .862c2.8 2.415 4.5.431 5-.862"></svg:path></svg:g>`,
})
export class IconParkOutlinePandaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
