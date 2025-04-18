import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashCircleLightIcon],svg[stash-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 12a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0M12 5.5a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13"></svg:path>`,
})
export class StashCircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
