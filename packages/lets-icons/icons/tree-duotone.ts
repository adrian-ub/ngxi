import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTreeDuotoneIcon],svg[lets-icons-tree-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsTreeDuotone0"><svg:g fill="none"><svg:path stroke="silver" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".25" d="M12 13.5v6"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M11 10a1 1 0 0 0-.8.4l-3 4A1 1 0 0 0 8 16h8a1 1 0 0 0 .8-1.6l-3-4a1 1 0 0 0-.8-.4z" clip-rule="evenodd"></svg:path><svg:path fill="#fff" d="m8.64 7.032l2.592-3.11a1 1 0 0 1 1.536 0l2.592 3.11c.651.781.095 1.968-.922 1.968H9.562C8.545 9 7.989 7.813 8.64 7.032"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsTreeDuotone0)"></svg:path>`,
})
export class LetsIconsTreeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
