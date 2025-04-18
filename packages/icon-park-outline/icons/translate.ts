import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTranslateIcon],svg[icon-park-outline-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M28.286 37h11.428M42 42l-2.286-5zm-16 0l2.286-5zm2.286-5L34 24l5.714 13zM16 6l1 3M6 11h22m-18 5s1.79 6.26 6.263 9.74C20.737 29.216 28 32 28 32"></svg:path><svg:path d="M24 11s-1.79 8.217-6.263 12.783C13.263 28.348 6 32 6 32"></svg:path></svg:g>`,
})
export class IconParkOutlineTranslateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
