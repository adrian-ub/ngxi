import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whh1Icon],svg[whh-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 1024H64q-26 0-45-18.5t-19-45T19 915t45-19h128V256q0-53-37-90t-89-38h-2q-27 0-45.5-18.5T0 64.5T18.5 19T64 0v1v-1q106 0 181 75t75 181v640h128q27 0 45.5 19t18.5 45.5t-19 45t-45 18.5"></svg:path>`,
})
export class Whh1Icon {
  readonly viewBox = input("0 0 512 1024")
  readonly width = input("0.5em")
  readonly height = input("1em")
}
