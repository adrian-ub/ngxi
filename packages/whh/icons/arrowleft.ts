import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhArrowleftIcon],svg[whh-arrowleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 468L471 19q19-19 45.5-19T562 19l92 91q19 19 19 45.5T654 201L468 385h492q27 0 45.5 18.5T1024 449v128q0 26-18.5 45T960 641H467l187 185q19 18 19 45t-19 45l-92 91q-19 19-45.5 19t-45.5-19L19 559Q0 540 0 513.5T19 468"></svg:path>`,
})
export class WhhArrowleftIcon {
  readonly viewBox = input("0 0 1024 1026")
  readonly width = input("1em")
  readonly height = input("1em")
}
