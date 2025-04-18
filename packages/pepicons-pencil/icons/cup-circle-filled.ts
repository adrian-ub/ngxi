import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilCupCircleFilledIcon],svg[pepicons-pencil-cup-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilCupCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M18 7.5H6a.5.5 0 0 0-.5.5c0 4.668 2.874 8.5 6.5 8.5s6.5-3.832 6.5-8.5a.5.5 0 0 0-.5-.5m-.512 1c-.19 3.932-2.608 7-5.488 7s-5.298-3.068-5.488-7z" clip-rule="evenodd"></svg:path><svg:path d="m16.862 13.329l.276-.961c.303.086.63.132.97.132c1.352 0 2.392-.72 2.392-1.5s-1.04-1.5-2.393-1.5v-1C19.95 8.5 21.5 9.572 21.5 11s-1.55 2.5-3.393 2.5c-.431 0-.852-.058-1.245-.171M6.5 17.75h11a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1 0-1.5"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilCupCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilCupCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
