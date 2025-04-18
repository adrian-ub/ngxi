import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPhonescreensizeIcon],svg[whh-phonescreensize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024H64q-27 0-45.5-18.5T0 960V64q0-26 18.5-45T64 0h640q27 0 45.5 19T768 64v896q0 27-18.5 45.5T704 1024m0-896H64v768h640zM256 256l320 448l64-64v192H448l64-64l-320-448l-64 64V192h192z"></svg:path>`,
})
export class WhhPhonescreensizeIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
