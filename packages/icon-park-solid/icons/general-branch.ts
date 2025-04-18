import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidGeneralBranchIcon],svg[icon-park-solid-general-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSGeneralBranch0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M40 9H8a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 5v4m18-4v4"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 17h36M18 30h12m-6-6v12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M6 11v12m36-12v12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSGeneralBranch0)"></svg:path>`,
})
export class IconParkSolidGeneralBranchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
