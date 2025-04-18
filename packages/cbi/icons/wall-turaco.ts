import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiWallTuracoIcon],svg[cbi-wall-turaco-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.262 21.762l-1.905-.714a10.5 10.5 0 0 0-1.905-.715V2.952h.477c.238-.476.952-.476 1.9-.714L9.5 2h.238c.476 0 .476 0 .476.476v.238h5.953l1.666-.238h.238c.239 0 .239 0 .477.238v18.1l-.477.238s-2.142-.715-2.381-.715s-.238-.238 0-.476l.715-.238h.714V4.143a25 25 0 0 1-3.1-.238l-3.329-.238h-.476v18.1c0 .238-.238.238-.476.238s-.238 0-.476-.238"></svg:path>`,
})
export class CbiWallTuracoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
