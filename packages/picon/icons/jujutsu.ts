import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconJujutsuIcon],svg[picon-jujutsu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0v3L0 8h3l1-2l1 2h3L7 3V0M1 3V2h6v1M5 2L3 6L2 5l2-3m0 0l2 2v2L4 3"></svg:path>`,
})
export class PiconJujutsuIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
