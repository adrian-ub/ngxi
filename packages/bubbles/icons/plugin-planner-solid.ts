import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginPlannerSolidIcon],svg[bubbles-plugin-planner-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 3.5H3.5a2 2 0 0 0-2 2V20a2 2 0 0 0 2 2H22a2 2 0 0 0 2-2V5.5a2 2 0 0 0-2-2M1.5 8H24M1.5 15H24M9 8v14m7.5-14v14"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 8.438h7v13.28H2zM3.5 11.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m.75 6.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class BubblesPluginPlannerSolidIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
