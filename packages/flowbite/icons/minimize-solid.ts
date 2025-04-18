import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteMinimizeSolidIcon],svg[flowbite-minimize-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9h4V5m-.5 3.5L4 4m15 5h-4V5m.5 3.5L20 4M5 15h4v4m-.5-3.5L4 20m15-5h-4v4m.5-3.5L20 20"></svg:path>`,
})
export class FlowbiteMinimizeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
