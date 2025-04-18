import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashSignoutAltLightIcon],svg[stash-signout-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.354 8.646a.5.5 0 0 1 0 .708L10.207 11.5H20a.5.5 0 0 1 0 1h-9.793l2.146 2.146a.5.5 0 0 1-.707.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .707 0"></svg:path><svg:path fill="currentColor" d="M3.5 12a7.5 7.5 0 0 1 12.749-5.357a.5.5 0 1 1-.7.714a6.5 6.5 0 1 0 0 9.286a.5.5 0 1 1 .7.714A7.5 7.5 0 0 1 3.5 12"></svg:path>`,
})
export class StashSignoutAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
