import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBriefcaseIcon],svg[memory-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6h5V3h1V2h6v1h1v3h5v1h1v12h-1v1H2v-1H1V7h1zm7 0h4V4H9zm10 2H3v10h16z"></svg:path>`,
})
export class MemoryBriefcaseIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
