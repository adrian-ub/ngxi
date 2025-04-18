import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashCircleIcon],svg[stash-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.25 12a7.75 7.75 0 1 1 15.5 0a7.75 7.75 0 0 1-15.5 0M12 5.75a6.25 6.25 0 1 0 0 12.5a6.25 6.25 0 0 0 0-12.5"></svg:path>`,
})
export class StashCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
