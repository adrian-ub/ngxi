import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneDataArrivalIcon],svg[icon-park-twotone-data-arrival-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTDataArrival0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" fill-rule="evenodd" d="M6 42h36V6H30q-1.986 4.738-6 4.738T18 6H6z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="m15 24l6 6l12-12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTDataArrival0)"></svg:path>`,
})
export class IconParkTwotoneDataArrivalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
