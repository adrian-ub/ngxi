import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashSigninAltIcon],svg[stash-signin-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.626 7.536a6.25 6.25 0 1 1 0 8.929a.75.75 0 1 0-1.05 1.07a7.75 7.75 0 1 0 0-11.071a.75.75 0 1 0 1.05 1.072"></svg:path><svg:path fill="currentColor" d="M12.53 8.47a.75.75 0 1 0-1.06 1.06l1.72 1.72H4a.75.75 0 0 0 0 1.5h9.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06z"></svg:path>`,
})
export class StashSigninAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
