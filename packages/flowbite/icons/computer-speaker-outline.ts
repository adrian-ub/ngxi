import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteComputerSpeakerOutlineIcon],svg[flowbite-computer-speaker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1M9 12H4m8 8V9h8v11zm0 0H9m8-4a1 1 0 1 0-2 0a1 1 0 0 0 2 0"></svg:path>`,
})
export class FlowbiteComputerSpeakerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
