import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashSearchLightIcon],svg[stash-search-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.397 3a7.397 7.397 0 1 0 0 14.795a7.397 7.397 0 0 0 0-14.795m-6.41 7.397a6.411 6.411 0 1 1 12.821 0a6.411 6.411 0 0 1-12.822 0"></svg:path><svg:path fill="currentColor" d="M16.838 15.792a.74.74 0 1 0-1.046 1.046l3.945 3.945a.74.74 0 1 0 1.046-1.046z"></svg:path>`,
})
export class StashSearchLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
