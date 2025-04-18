import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypePddlHappeningsIcon],svg[vscode-icons-file-type-pddl-happenings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0055d4" d="M11.36 4.15h17.37v6.45H11.36z"></svg:path><svg:ellipse cx="5.863" cy="7.375" fill="#0055d4" rx="2.638" ry="2.785"></svg:ellipse><svg:path fill="#0055d4" d="M11.433 12.945h17.37v6.45h-17.37z"></svg:path><svg:ellipse cx="5.936" cy="16.169" fill="#0055d4" rx="2.638" ry="2.785"></svg:ellipse><svg:path fill="#0055d4" d="M11.433 21.739h17.37v6.45h-17.37z"></svg:path><svg:ellipse cx="5.936" cy="24.964" fill="#0055d4" rx="2.638" ry="2.785"></svg:ellipse>`,
})
export class VscodeIconsFileTypePddlHappeningsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
