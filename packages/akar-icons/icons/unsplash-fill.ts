import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsUnsplashFillIcon],svg[akar-icons-unsplash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 2h7.5v5.625h-7.5zM2 10.75h6.268v5.675h7.517V10.75H22V22H2z" clip-rule="evenodd"></svg:path>`,
})
export class AkarIconsUnsplashFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
