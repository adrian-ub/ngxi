import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsSolidityIcon],svg[skill-icons-solidity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#65AFFF" rx="60"></svg:rect><svg:path fill="#000" d="m165.536 25l-37.53 58.79H53L90.503 25z" opacity=".45"></svg:path><svg:path fill="#000" d="M128.006 83.79h75.033L165.536 25H90.503z" opacity=".6"></svg:path><svg:path fill="#000" d="m90.503 142.557l37.503-58.767L90.503 25L53 83.79z" opacity=".8"></svg:path><svg:path fill="#000" d="m90.867 230.742l37.529-58.79h75.033l-37.53 58.79z" opacity=".45"></svg:path><svg:path fill="#000" d="M128.396 171.952H53.363l37.503 58.79H165.9z" opacity=".6"></svg:path><svg:path fill="#000" d="m165.899 113.185l-37.503 58.767l37.503 58.79l37.529-58.79z" opacity=".8"></svg:path></svg:g>`,
})
export class SkillIconsSolidityIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
