import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashCheckCircleSolidIcon],svg[stash-check-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a8 8 0 1 1 0 16a8 8 0 0 1 0-16m3.707 6.707a1 1 0 0 0-1.414-1.414L11 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0z"></svg:path>`,
})
export class StashCheckCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
