import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAirportPlaneTransitSolidIcon],svg[streamline-airport-plane-transit-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.213 2.538A5.499 5.499 0 0 0 1.595 8.01a.75.75 0 0 1-1.474.277a6.999 6.999 0 0 1 11.163-6.821l.612-.612a.5.5 0 0 1 .854.353V3.5a.5.5 0 0 1-.5.5H9.957a.5.5 0 0 1-.353-.853zm2.791 2.577a.75.75 0 0 1 .876.598a6.999 6.999 0 0 1-11.164 6.821l-.612.613a.5.5 0 0 1-.854-.354V10.5a.5.5 0 0 1 .5-.5h2.293a.5.5 0 0 1 .354.854l-.61.609a5.499 5.499 0 0 0 8.618-5.472a.75.75 0 0 1 .6-.876Zm-9.048.937l-.71.365a.257.257 0 0 0-.112.33l.98 1.971a.507.507 0 0 0 .682.213l1.606-.85l.122-.056l-.25 1.669a.28.28 0 0 0 .406.26l1.23-.611a.27.27 0 0 0 .151-.214l.38-2.07l.186-.089l1.677-.775a.514.514 0 0 0 .242-.686a1.882 1.882 0 0 0-2.801-.547l-2.77 1.94l-.67-.764a.257.257 0 0 0-.35-.086Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAirportPlaneTransitSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
