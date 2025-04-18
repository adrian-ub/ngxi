import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopTruckCircleIcon],svg[pepicons-pop-truck-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.5 21.75a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5m9 0a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5"></svg:path><svg:path fill-rule="evenodd" d="M21 7.5H11a2 2 0 0 0-2 2V17a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.5a2 2 0 0 0-2-2M11 17V9.5h10V17z" clip-rule="evenodd"></svg:path><svg:path d="M13.25 11.75a.5.5 0 0 1 0-1h5.5a.5.5 0 0 1 0 1zm0 2a.5.5 0 0 1 0-1h5.5a.5.5 0 0 1 0 1zm0 2a.5.5 0 0 1 0-1h5.5a.5.5 0 0 1 0 1z"></svg:path><svg:path fill-rule="evenodd" d="M9 10.5H5.736a2 2 0 0 0-1.92 1.442L3 14.75V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4.5a2 2 0 0 0-2-2M5 17v-1.966l.736-2.534H9V17z" clip-rule="evenodd"></svg:path><svg:path d="M6.29 13.1H8a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-.85l.015-.122l.29-1.15a.5.5 0 0 1 .485-.378"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopTruckCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
