import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashEllipsisVIcon],svg[stash-ellipsis-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19.25a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5m0-5.5a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5m1.75-7.25a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0"></svg:path>`,
})
export class StashEllipsisVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
