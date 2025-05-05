import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFragileIcon],svg[picon-fragile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0H3v2h1l1 2V1H4m1 4v2l2 1H1l2-1V5L1 3V0h6v3"></svg:path>`,
})
export class PiconFragileIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
