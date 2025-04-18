import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhIIcon],svg[whh-i-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 128h-63v768h63q27 0 45.5 19t18.5 45.5t-18.5 45T320 1024H64q-26 0-45-18.5t-19-45T19 915t45-19h65V128H64q-26 0-45-18.5t-19-45T19 19T64 0h256q27 0 45.5 19T384 64.5t-18.5 45T320 128"></svg:path>`,
})
export class WhhIIcon {
  readonly viewBox = input("0 0 384 1024")
  readonly width = input("0.38em")
  readonly height = input("1em")
}
