import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashCircleDotSolidIcon],svg[stash-circle-dot-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 11.75a3.75 3.75 0 1 1 0-7.5a3.75 3.75 0 0 1 0 7.5"></svg:path>`,
})
export class StashCircleDotSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
