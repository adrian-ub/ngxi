import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiCameraIcon],svg[flat-ui-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B97D3" d="M100 85c0 8.284-6.716 15-15 15H15c-8.284 0-15-6.716-15-15V15C0 6.716 6.716 0 15 0h70c8.284 0 15 6.716 15 15z"></svg:path><svg:path fill="#fff" stroke="#2980BA" stroke-miterlimit="10" stroke-width="2" d="M90 15a5 5 0 1 1-10.001-.001A5 5 0 0 1 90 15z"></svg:path><svg:circle cx="49" cy="52" r="37" fill="#324559" opacity=".5"></svg:circle><svg:circle cx="50" cy="50" r="37" fill="#fff"></svg:circle><svg:circle cx="50" cy="50" r="34" fill="#202D3C"></svg:circle><svg:circle cx="50" cy="50" r="22" fill="#35495E"></svg:circle><svg:circle cx="50" cy="50" r="13" fill="#202D3C"></svg:circle><svg:circle cx="50" cy="50" r="4" fill="#C03A2B"></svg:circle><svg:path fill="none" stroke="#35495E" stroke-miterlimit="10" stroke-width="2" d="M50 59a9 9 0 0 1-9-9.001" clip-rule="evenodd"></svg:path><svg:path d="M23.625 23.873c14.498-14.498 38.004-14.498 52.502 0s14.498 38.004 0 52.502" opacity=".15"></svg:path>`,
})
export class FlatUiCameraIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
