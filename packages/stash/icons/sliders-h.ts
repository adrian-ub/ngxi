import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashSlidersHIcon],svg[stash-sliders-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3.5c-1.12 0-2.067.736-2.386 1.75H4a.75.75 0 0 0 0 1.5h1.614a2.501 2.501 0 0 0 4.772 0H20a.75.75 0 0 0 0-1.5h-9.614A2.5 2.5 0 0 0 8 3.5M6.5 6a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m11.886 6.75a2.501 2.501 0 0 1-4.771 0H4a.75.75 0 0 1 0-1.5h9.615a2.501 2.501 0 0 1 4.77 0H20a.75.75 0 0 1 0 1.5zM14.5 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M8 15.5c-1.12 0-2.067.736-2.386 1.75H4a.75.75 0 0 0 0 1.5h1.614a2.501 2.501 0 0 0 4.772 0H20a.75.75 0 0 0 0-1.5h-9.614A2.5 2.5 0 0 0 8 15.5M6.5 18a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></svg:path>`,
})
export class StashSlidersHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
