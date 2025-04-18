import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypePddlPlanIcon],svg[vscode-icons-file-type-pddl-plan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="green" d="M4.178 4.956h17.37v6.45H4.178zm7.145 8.538h17.37v6.45h-17.37zm10.334 8.539h7.036v6.45h-7.036z"></svg:path>`,
})
export class VscodeIconsFileTypePddlPlanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
