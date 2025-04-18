import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginPlannerOutlineIcon],svg[bubbles-plugin-planner-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.75 3.25H3.25a2 2 0 0 0-2 2v14.5a2 2 0 0 0 2 2h18.5a2 2 0 0 0 2-2V5.25a2 2 0 0 0-2-2m-20.5 4.5h22.5m-22.5 7h22.5m-15-7v14m7.5-14v14M4 11.25h2m-2 7h2"></svg:path>`,
})
export class BubblesPluginPlannerOutlineIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
