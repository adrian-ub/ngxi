import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFileDockAddFillIcon],svg[lets-icons-file-dock-add-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2c1.5 0 2.7 0 3.677.074A2.5 2.5 0 0 0 15.5 3v.5H15a2.5 2.5 0 0 0 0 5h.5V9a2.5 2.5 0 0 0 4.5 1.5V14c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14v-4c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2m-4 9a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 3v6m3-3h-6"></svg:path></svg:g>`,
})
export class LetsIconsFileDockAddFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
