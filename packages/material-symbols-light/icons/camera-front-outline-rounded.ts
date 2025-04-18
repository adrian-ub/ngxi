import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCameraFrontOutlineRoundedIcon],svg[material-symbols-light-camera-front-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.242 19.5H6.5q-.213 0-.356-.144T6 18.999t.144-.356t.356-.143h4.742l-1.246-1.246q-.14-.14-.15-.345q-.01-.203.15-.363t.354-.16t.354.16l1.888 1.889q.242.242.242.565t-.242.566l-1.888 1.888q-.14.14-.345.15q-.203.01-.363-.15t-.16-.354t.16-.354zM6 4.616q0-.691.463-1.153T7.616 3h8.769q.69 0 1.153.463T18 4.616V16.5q0 .213-.144.356t-.357.144t-.356-.144T17 16.5v-1.666q-.942-.57-2.34-.933T12 13.538t-2.66.363t-2.34.934V16.5q0 .213-.144.356T6.499 17t-.356-.144T6 16.5zm1 9.073q1.123-.518 2.472-.834q1.35-.316 2.528-.316t2.528.316t2.472.834V4.616q0-.231-.192-.424T16.384 4H7.616q-.231 0-.424.192T7 4.615zm7.5 5.811q-.213 0-.356-.144T14 18.999t.144-.356t.356-.143h3q.213 0 .356.144t.144.357t-.144.356t-.356.143zm-2.498-8.538q-1.04 0-1.771-.729T9.5 8.463t.729-1.77t1.769-.731t1.771.728t.731 1.77t-.728 1.77t-1.77.732m-.002-1q.617 0 1.059-.442q.441-.441.441-1.059t-.441-1.058q-.442-.442-1.059-.442t-1.059.442t-.441 1.058t.441 1.06q.442.44 1.059.44m0-1.5"></svg:path>`,
})
export class MaterialSymbolsLightCameraFrontOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
