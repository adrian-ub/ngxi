import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineGifFormatSolidIcon],svg[streamline-gif-format-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.438 2.156a2.5 2.5 0 0 1 2.5 2.5v4.289a2.5 2.5 0 0 1-2.5 2.5H2.562a2.5 2.5 0 0 1-2.5-2.5V4.656a2.5 2.5 0 0 1 2.5-2.5zM7.806 9.153a.5.5 0 0 0 0-1H7.38V5.449h.426a.5.5 0 1 0 0-1H5.954a.5.5 0 1 0 0 1h.426v2.704h-.426a.5.5 0 1 0 0 1zM2.269 5.875c0-.236.19-.426.426-.426h.617c.185 0 .344.117.402.284a.5.5 0 0 0 .943-.334a1.43 1.43 0 0 0-1.345-.95h-.617c-.787 0-1.426.638-1.426 1.426v1.852c0 .787.639 1.426 1.426 1.426h.617c.788 0 1.426-.639 1.426-1.426v-.618a.5.5 0 0 0-.5-.5h-.926a.5.5 0 1 0 0 1h.426v.118c0 .235-.19.426-.426.426h-.617a.426.426 0 0 1-.426-.426zm6.993-.926a.5.5 0 0 1 .5-.5h2.469a.5.5 0 1 1 0 1h-1.97v.697h1.661a.5.5 0 0 1 0 1h-1.66v1.507a.5.5 0 0 1-1 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGifFormatSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
