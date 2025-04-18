import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasStageAllIcon],svg[pajamas-stage-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.75 3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm0 4.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm-.75 5a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75M6.28 7.28a.75.75 0 0 0-1.06-1.06L2.5 8.94L1.28 7.72A.75.75 0 0 0 .22 8.78l1.75 1.75a.75.75 0 0 0 1.06 0z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasStageAllIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
