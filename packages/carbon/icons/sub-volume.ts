import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSubVolumeIcon],svg[carbon-sub-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M29.474 19.12L23.681 16l5.793-3.12a1 1 0 0 0 0-1.76l-13-7a.998.998 0 0 0-.948 0l-13 7a1 1 0 0 0 0 1.76L8.319 16l-5.793 3.12a1 1 0 0 0 0 1.76l13 7a1 1 0 0 0 .948 0l13-7a1 1 0 0 0 0-1.76zM16 6.136L26.89 12L16 17.864L5.11 12zm0 19.728L5.11 20l5.319-2.864l5.097 2.744a1 1 0 0 0 .948 0l5.097-2.745L26.891 20z" fill="currentColor"></svg:path>`,
})
export class CarbonSubVolumeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
