import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDataArrivalIcon],svg[icon-park-outline-data-arrival-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 42h36V6H30q-1.986 4.738-6 4.738T18 6H6z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="m15 24l6 6l12-12"></svg:path></svg:g>`,
})
export class IconParkOutlineDataArrivalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
