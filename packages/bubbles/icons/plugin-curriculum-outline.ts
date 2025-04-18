import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginCurriculumOutlineIcon],svg[bubbles-plugin-curriculum-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5.75 2.749h-3a1.5 1.5 0 0 0-1.5 1.5v18a1.5 1.5 0 0 0 1.5 1.5h19.5a1.5 1.5 0 0 0 1.5-1.5v-18a1.5 1.5 0 0 0-1.5-1.5h-10.5"></svg:path><svg:path d="m11.75 11.749l-3-2.249l-3 2.25V2a.75.75 0 0 1 .75-.751H11a.75.75 0 0 1 .75.75zm-6 7.5h10.5m-10.5-4.5h13.5m0-4.5h-4.5"></svg:path></svg:g>`,
})
export class BubblesPluginCurriculumOutlineIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
