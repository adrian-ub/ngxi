import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashEllipsisHIcon],svg[stash-ellipsis-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 0 0-3.5 0m5.5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 0 0-3.5 0m7.25 1.75a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5"></svg:path>`,
})
export class StashEllipsisHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
