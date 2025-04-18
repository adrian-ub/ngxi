import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsChessbookIcon],svg[arcticons-chessbook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 8.627v22.395l18.467 8.462l18.53-8.46V8.516l-18.53 8.204zm18.468 8.093v22.764"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m42.5 19.77l-18.53 8.332l-18.467-8.276m9.23-7.152v22.579m18.499-22.634v22.635"></svg:path>`,
})
export class ArcticonsChessbookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
