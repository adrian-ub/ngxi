import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCupWithStrawIcon],svg[openmoji-cup-with-straw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="m18.933 21.376l34.036.119l-6.029 44.232l-20.946-.159z"></svg:path><svg:path fill="#d22f27" d="m49.923 50.25l1.977-14.4H20.4l2.259 14.4z"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-miterlimit="10" d="m49.923 50.25l1.977-14.4H20.4l2.259 14.4z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m54 20.55l-6.3 45.9H25.2L18 20.55m0 0h36M36 5v12"></svg:path></svg:g>`,
})
export class OpenmojiCupWithStrawIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
