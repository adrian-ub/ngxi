import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditBinocularBinocularBinocularsViewZoomIcon],svg[streamline-interface-edit-binocular-binocular-binoculars-view-zoom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="3" cy="11" r="2.5"></svg:circle><svg:path d="M5.5 3V1.5a1 1 0 0 0-1-1H3.32a1 1 0 0 0-1 .81L.55 10.5m3.95-5h5M5.5 8v3"></svg:path><svg:circle cx="11" cy="11" r="2.5"></svg:circle><svg:path d="M8.5 3V1.5a1 1 0 0 1 1-1h1.18a1 1 0 0 1 1 .81l1.79 9.19M8.5 8v3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditBinocularBinocularBinocularsViewZoomIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
