import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashSignoutAltIcon],svg[stash-signout-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4.25a7.75 7.75 0 1 0 5.424 13.286a.75.75 0 1 0-1.05-1.072a6.25 6.25 0 1 1 0-8.929a.75.75 0 1 0 1.05-1.07A7.73 7.73 0 0 0 11 4.25"></svg:path><svg:path fill="currentColor" d="M12.53 9.53a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72H20a.75.75 0 0 0 0-1.5h-9.19z"></svg:path>`,
})
export class StashSignoutAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
