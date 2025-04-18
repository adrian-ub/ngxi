import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineForkKnifeSolidIcon],svg[streamline-fork-knife-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.974.15a1 1 0 0 1 .973-.044c2.333 1.166 3.467 3.203 4.014 5.12c.54 1.884.539 3.748.539 4.75V10a1 1 0 0 1-1 1h-3v2a1 1 0 1 1-2 0V1a1 1 0 0 1 .474-.85M1 .25a.75.75 0 0 1 .75.75v2.5a1.75 1.75 0 0 0 1 1.581V1a.75.75 0 0 1 1.5 0v4.081a1.75 1.75 0 0 0 1-1.581V1a.75.75 0 0 1 1.5 0v2.5A3.25 3.25 0 0 1 4.5 6.592V13a1 1 0 1 1-2 0V6.592A3.25 3.25 0 0 1 .25 3.5V1A.75.75 0 0 1 1 .25" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineForkKnifeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
