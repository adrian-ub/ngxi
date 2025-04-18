import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRoadSignBothIcon],svg[icon-park-solid-road-sign-both-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M10 8v8h28l4-4l-4-4zm28 15v8H10l-4-4l4-4z"></svg:path><svg:path stroke-linecap="round" d="M24 31v13m0-28v7m0-19v4m-5 36h10"></svg:path></svg:g>`,
})
export class IconParkSolidRoadSignBothIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
