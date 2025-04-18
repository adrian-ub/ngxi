import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashEllipsisVSolidIcon],svg[stash-ellipsis-v-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.25a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m0 5.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m0 5.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"></svg:path>`,
})
export class StashEllipsisVSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
