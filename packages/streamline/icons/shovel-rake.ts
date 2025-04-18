import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShovelRakeIcon],svg[streamline-shovel-rake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.849 7.5H3.15a2 2 0 0 1-1.923-2.55l.86-3.008a1.989 1.989 0 0 1 3.824 0l.86 3.009A2 2 0 0 1 4.849 7.5M4 5.5v8m-1.5 0h3m5.5 0V.5M9.5.5h3m1 13V11A2.5 2.5 0 0 0 11 8.5v0A2.5 2.5 0 0 0 8.5 11v2.5"></svg:path>`,
})
export class StreamlineShovelRakeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
