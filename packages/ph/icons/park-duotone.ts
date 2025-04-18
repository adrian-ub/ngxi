import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phParkDuotoneIcon],svg[ph-park-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 160h-64l32-128Z" opacity=".2"></svg:path><svg:path d="M232 192h-32v-24h24a8 8 0 0 0 7.76-9.94l-32-128a8 8 0 0 0-15.52 0l-32 128A8 8 0 0 0 160 168h24v24h-64v-16h8a8 8 0 0 0 0-16h-8v-16h8a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16h8v16h-8a8 8 0 0 0 0 16h8v16H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M192 65l21.75 87h-43.5ZM64 144h40v16H64Zm0 32h40v16H64Zm52-80a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-40a12 12 0 1 1-12 12a12 12 0 0 1 12-12"></svg:path></svg:g>`,
})
export class PhParkDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
