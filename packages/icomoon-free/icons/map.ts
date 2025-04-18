import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeMapIcon],svg[icomoon-free-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 3l5-2v12l-5 2zM6 .5l5 3V15l-5-2.5zm6 3l4-3v12l-4 3z"></svg:path>`,
})
export class IcomoonFreeMapIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
