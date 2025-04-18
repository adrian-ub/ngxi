import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMilestoneIcon],svg[carbon-milestone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.586 6.586A2 2 0 0 0 23.17 6H16V2h-2v4H6a2.003 2.003 0 0 0-2 2v6a2.003 2.003 0 0 0 2 2h8v14h2V16h7.171a2 2 0 0 0 1.415-.586L29 11ZM23.17 14H6V8h17.172l3 3Z"></svg:path>`,
})
export class CarbonMilestoneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
