import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidGymnasticsOneIcon],svg[icon-park-solid-gymnastics-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-miterlimit="2" stroke-width="4"><svg:path fill="currentColor" d="M27 24a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m23 29l-2 7l-9-3l-4 11m13-8l1.49 6.48A2 2 0 0 0 24.43 44h10.58M7 23l16 6l-9-9l-1-9m-1-7h5c12 0 27 1.45 27 28"></svg:path></svg:g>`,
})
export class IconParkSolidGymnasticsOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
