import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFileImportOutlineIcon],svg[lsicon-file-import-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M13 11H7.5M9 9l-2 2l2 2m.5 1.5h-6v-13H9m0 0V5h3.5M9 1.5L12.5 5m0 0v2.5"></svg:path>`,
})
export class LsiconFileImportOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
