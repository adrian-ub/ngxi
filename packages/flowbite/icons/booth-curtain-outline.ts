import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteBoothCurtainOutlineIcon],svg[flowbite-booth-curtain-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 5v14m14 0V8h2M3 8h6m0-2v8.586c0 .89 1.077 1.337 1.707.707l.586-.586a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 0 1.414 0l.586-.586a1 1 0 0 1 1.414 0l.586.586c.63.63 1.707.184 1.707-.707V6a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1Z"></svg:path>`,
})
export class FlowbiteBoothCurtainOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
