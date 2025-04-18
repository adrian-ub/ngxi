import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHiIcon],svg[icon-park-outline-hi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 43H17.476a.26.26 0 0 1-.218-.121L7.86 27.727a4.095 4.095 0 1 1 7.011-4.23l2.462 4.194V8.576a3 3 0 0 1 3.522-2.955L37.52 8.563A3 3 0 0 1 40 11.517V40a3 3 0 0 1-3 3"></svg:path>`,
})
export class IconParkOutlineHiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
