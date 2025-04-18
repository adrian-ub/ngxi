import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineWhistlingIcon],svg[icon-park-outline-whistling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M27 11H4v8h11c-.65 1.55-1 3.21-1 5c0 7.21 5.79 13 13 13c7.2 0 13-5.79 13-13s-5.79-13-13-13m0 0v6m13 7h4"></svg:path>`,
})
export class IconParkOutlineWhistlingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
