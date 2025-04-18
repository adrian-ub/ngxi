import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHotelBed2SolidIcon],svg[streamline-hotel-bed-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.046 1.54C.046.714.715.045 1.54.045h10.922c.824 0 1.493.669 1.493 1.493v4.313H.046V1.539Zm0 5.562v5.359c0 .824.669 1.493 1.493 1.493h10.922c.824 0 1.493-.669 1.493-1.493V7.1H.046Zm6.268-3.554v-.979a1 1 0 0 0-1-1H2.63a1 1 0 0 0-1 1v.979a1 1 0 0 0 1 1h2.685a1 1 0 0 0 1-1Zm6.057-.979v.979a1 1 0 0 1-1 1H8.686a1 1 0 0 1-1-1v-.979a1 1 0 0 1 1-1h2.685a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHotelBed2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
