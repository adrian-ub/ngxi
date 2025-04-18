import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashTimesIcon],svg[stash-times-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.227 7.227a.75.75 0 0 1 1.06 0L12 10.939l3.712-3.712a.75.75 0 0 1 1.061 1.06L13.061 12l3.712 3.712a.75.75 0 0 1-1.06 1.061L12 13.061l-3.712 3.712a.75.75 0 1 1-1.061-1.06L10.939 12L7.227 8.288a.75.75 0 0 1 0-1.061"></svg:path>`,
})
export class StashTimesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
