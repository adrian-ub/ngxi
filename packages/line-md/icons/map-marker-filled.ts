import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdMapMarkerFilledIcon],svg[line-md-map-marker-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdMapMarkerFilled0"><svg:g fill="none" fill-opacity="0" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" stroke-dasharray="48" stroke-dashoffset="48" d="M12 20.5c0 0 -6 -7 -6 -11.5c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 4.5 -6 11.5 -6 11.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:circle cx="12" cy="9" r="2.5" fill="#000" stroke="none"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.5s" values="0;1"></svg:animate></svg:circle></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdMapMarkerFilled0)"></svg:rect>`,
})
export class LineMdMapMarkerFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
