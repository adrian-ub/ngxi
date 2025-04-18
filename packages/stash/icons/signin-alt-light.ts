import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashSigninAltLightIcon],svg[stash-signin-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.646 8.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l2.147-2.146H4a.5.5 0 0 1 0-1h9.793l-2.147-2.146a.5.5 0 0 1 0-.708"></svg:path><svg:path fill="currentColor" d="M13 5.5a6.48 6.48 0 0 0-4.549 1.857a.5.5 0 0 1-.7-.714a7.5 7.5 0 1 1 0 10.714a.5.5 0 1 1 .7-.714A6.5 6.5 0 1 0 13 5.5"></svg:path>`,
})
export class StashSigninAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
