import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashSlidersHDuotoneIcon],svg[stash-sliders-h-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 4.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M5.5 6a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M8 16.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M5.5 18a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.855 12.75a2 2 0 0 0 0-1.5H20a.75.75 0 0 1 0 1.5zm-3.71 0H4a.75.75 0 0 1 0-1.5h10.145a2 2 0 0 0 0 1.5m-4.29-6a2 2 0 0 0 0-1.5H20a.75.75 0 0 1 0 1.5zm-3.71 0H4a.75.75 0 0 1 0-1.5h2.145a2 2 0 0 0 0 1.5m3.71 12a2 2 0 0 0 0-1.5H20a.75.75 0 0 1 0 1.5zm-3.71 0H4a.75.75 0 0 1 0-1.5h2.145a2 2 0 0 0 0 1.5" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16 10.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M13.5 12a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0" clip-rule="evenodd"></svg:path>`,
})
export class StashSlidersHDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
