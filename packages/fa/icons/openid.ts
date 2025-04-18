import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faOpenidIcon],svg[fa-openid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1086 0v1536l-272 128q-228-20-414-102t-293-208.5T0 1081q0-140 100.5-263.5t275-205.5T767 504v172q-217 38-356.5 150T271 1081q0 152 154.5 267T814 1493V133zm669 582l37 390l-525-114l147-83q-119-70-280-99V504q277 33 481 157z"></svg:path>`,
})
export class FaOpenidIcon {
  readonly viewBox = input("0 0 1792 1664")
  readonly width = input("1.08em")
  readonly height = input("1em")
}
