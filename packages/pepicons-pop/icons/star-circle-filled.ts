import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopStarCircleFilledIcon],svg[pepicons-pop-star-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopStarCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M8.705 20.886L13 18.97l4.295 1.915a1 1 0 0 0 1.402-1.019l-.494-4.677l3.148-3.493a1 1 0 0 0-.535-1.647l-4.6-.976L13.865 5a1 1 0 0 0-1.732 0l-2.35 4.074l-4.6.976a1 1 0 0 0-.535 1.647l3.148 3.494l-.494 4.676a1 1 0 0 0 1.402 1.018m3.888-3.924l-3.119 1.39l.359-3.395a1 1 0 0 0-.252-.774l-2.286-2.537l3.34-.708a1 1 0 0 0 .66-.478L13 7.502l1.706 2.958a1 1 0 0 0 .659.478l3.34.708l-2.286 2.537a1 1 0 0 0-.252.774l.359 3.396l-3.119-1.39a1 1 0 0 0-.814 0" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopStarCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopStarCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
