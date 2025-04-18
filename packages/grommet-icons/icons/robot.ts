import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsRobotIcon],svg[grommet-icons-robot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M18.348 15.954a7 7 0 1 0-12.622.156M12 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 20a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0-17V3M9 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm6 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-9 4.988L5 16s.072-.772.5-.5c.93.591 3.074 1.5 6.5 1.5c3.554 0 5.618-.916 6.5-1.5c.359-.238.5.5.5.5l-1 2.988S17.005 21 12 21s-6-2.012-6-2.012Z"></svg:path>`,
})
export class GrommetIconsRobotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
