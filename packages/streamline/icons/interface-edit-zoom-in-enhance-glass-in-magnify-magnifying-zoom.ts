import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditZoomInEnhanceGlassInMagnifyMagnifyingZoomIcon],svg[streamline-interface-edit-zoom-in-enhance-glass-in-magnify-magnifying-zoom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="5.92" cy="5.92" r="5.42"></svg:circle><svg:path d="M13.5 13.5L9.75 9.75M6 3.5v5M3.5 6h5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditZoomInEnhanceGlassInMagnifyMagnifyingZoomIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
