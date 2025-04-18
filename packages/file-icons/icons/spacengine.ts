import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsSpacengineIcon],svg[file-icons-spacengine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M312.548 375.792L0 261.172v-40.987l312.548-115.95v46.596L64.47 238.052l248.078 89.958zM429.493 0v512H474V0z"></svg:path>`,
})
export class FileIconsSpacengineIcon {
  readonly viewBox = input("0 0 474 512")
  readonly width = input("0.93em")
  readonly height = input("1em")
}
