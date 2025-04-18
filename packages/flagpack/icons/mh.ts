import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackMhIcon],svg[flagpack-mh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#3D58DB" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackMh0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackMh0)"><svg:path fill="#F7FCFF" fill-rule="evenodd" d="m8 11l-.817 2.944l.008-3.055l-1.581 2.614l.831-2.94l-2.228 2.091l1.594-2.606l-2.709 1.412l2.238-2.08l-2.99.63l2.717-1.4l-3.049-.2l2.993-.615L2.126 6.78l3.047.216l-2.5-1.755l2.876 1.03l-1.934-2.365l2.492 1.768l-1.224-2.8l1.922 2.375l-.424-3.025l1.21 2.805L8 2l.409 3.028l1.21-2.805l-.424 3.025l1.922-2.375l-1.224 2.8l2.492-1.768l-1.934 2.365l2.876-1.03l-2.5 1.755l3.047-.216l-2.881 1.016l2.993.614l-3.049.201l2.717 1.4l-2.99-.63l2.238 2.08l-2.71-1.412l1.595 2.606l-2.228-2.09l.831 2.94l-1.58-2.615l.007 3.055z" clip-rule="evenodd"></svg:path><svg:path fill="#fff" d="m-.782 24.745l34.04-23.53v7.67z"></svg:path><svg:path fill="#E2AE57" d="m-.782 24.745l34.04-29.53v7.67z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackMhIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
