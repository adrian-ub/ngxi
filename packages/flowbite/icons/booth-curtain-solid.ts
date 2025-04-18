import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteBoothCurtainSolidIcon],svg[flowbite-booth-curtain-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v2H3a1 1 0 0 0 0 2h1v10a1 1 0 1 0 2 0V9h2v5.586c0 1.782 2.154 2.674 3.414 1.414l.586-.586l.586.586a2 2 0 0 0 2.828 0l.586-.586l.586.586c.411.411.918.593 1.414.59V19a1 1 0 1 0 2 0V9h1a1 1 0 1 0 0-2h-1V6a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H6V5a1 1 0 0 0-2 0"></svg:path>`,
})
export class FlowbiteBoothCurtainSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
