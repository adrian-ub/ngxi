import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhChristiancrossIcon],svg[whh-christiancross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 512H512v448q0 26-18.5 45t-45.5 19H320q-26 0-45-19t-19-45V512H64q-26 0-45-19T0 448V320q0-27 18.5-45.5T64 256h192V64q0-27 19-45.5T320 0h128q27 0 45.5 18.5T512 64v192h192q27 0 45.5 18.5T768 320v128q0 26-18.5 45T704 512"></svg:path>`,
})
export class WhhChristiancrossIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
