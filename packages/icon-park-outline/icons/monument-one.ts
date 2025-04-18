import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMonumentOneIcon],svg[icon-park-outline-monument-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 38h20v6H14zm4 0l2-29l4-5l4 5l2 29z"></svg:path><svg:path stroke-linecap="round" d="M4 44h40"></svg:path></svg:g>`,
})
export class IconParkOutlineMonumentOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
