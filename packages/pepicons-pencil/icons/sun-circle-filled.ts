import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilSunCircleFilledIcon],svg[pepicons-pencil-sun-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilSunCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" transform="translate(3 3)"><svg:path fill-rule="evenodd" d="M10 13.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m0-6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5" clip-rule="evenodd"></svg:path><svg:rect width="1" height="3" x="1" y="10.5" rx=".5" transform="rotate(-90 1 10.5)"></svg:rect><svg:rect width="1" height="3" x="16" y="10.5" rx=".5" transform="rotate(-90 16 10.5)"></svg:rect><svg:rect width="1" height="3" x="14" y="14.707" rx=".5" transform="rotate(-45 14 14.707)"></svg:rect><svg:rect width="1" height="3" x="3" y="3.707" rx=".5" transform="rotate(-45 3 3.707)"></svg:rect><svg:rect width="1" height="3" x="9.5" y="16" rx=".5"></svg:rect><svg:rect width="1" height="3" x="9.5" y="1" rx=".5"></svg:rect><svg:rect width="1" height="3" x="16.121" y="3" rx=".5" transform="rotate(45 16.121 3)"></svg:rect><svg:rect width="1" height="3" x="5.121" y="14" rx=".5" transform="rotate(45 5.121 14)"></svg:rect></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilSunCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilSunCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
