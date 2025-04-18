import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteCodeMergeOutlineIcon],svg[flowbite-code-merge-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8v8m0-8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m6-2a2 2 0 1 1 4 0a2 2 0 0 1-4 0m0 0h-1a5 5 0 0 1-5-5v-.5"></svg:path>`,
})
export class FlowbiteCodeMergeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
