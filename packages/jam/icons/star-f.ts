import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamStarFIcon],svg[jam-star-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 16.379l-6.173 3.245l1.179-6.874L.01 7.882l6.902-1.003L10 .624l3.087 6.255l6.902 1.003l-4.995 4.868l1.18 6.874z"></svg:path>`,
})
export class JamStarFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
