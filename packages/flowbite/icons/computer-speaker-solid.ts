import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteComputerSpeakerSolidIcon],svg[flowbite-computer-speaker-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 8a1 1 0 0 0-1 1v10H9a1 1 0 1 0 0 2h11a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm4 10a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path><svg:path d="M5 3a2 2 0 0 0-2 2v6h6V9a3 3 0 0 1 3-3h8c.35 0 .687.06 1 .17V5a2 2 0 0 0-2-2zm4 10H3v2a2 2 0 0 0 2 2h4z"></svg:path></svg:g>`,
})
export class FlowbiteComputerSpeakerSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
