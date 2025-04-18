import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashCircleDotIcon],svg[stash-circle-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15.75a3.75 3.75 0 1 1 0-7.5a3.75 3.75 0 0 1 0 7.5"></svg:path><svg:path fill="currentColor" d="M12 4.25a7.75 7.75 0 1 0 0 15.5a7.75 7.75 0 0 0 0-15.5M5.75 12a6.25 6.25 0 1 1 12.5 0a6.25 6.25 0 0 1-12.5 0"></svg:path>`,
})
export class StashCircleDotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
