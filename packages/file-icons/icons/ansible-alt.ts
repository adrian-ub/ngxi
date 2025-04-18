import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsAnsibleAltIcon],svg[file-icons-ansible-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m242.28 99.715l125.453 297.166L178.77 254.18zM464.958 465.88L272.075 19.74c-10.957-26.127-49.027-26.512-60.374 0L0 508.22h72.135l83.897-201.508l250.12 194.451c28.351 26.743 74.49-.207 58.806-35.283"></svg:path>`,
})
export class FileIconsAnsibleAltIcon {
  readonly viewBox = input("0 0 469 512")
  readonly width = input("0.92em")
  readonly height = input("1em")
}
