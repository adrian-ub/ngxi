import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFolderAdd1FilledIcon],svg[tdesign-folder-add-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.48 2.5H1V21h22V5H11.48zM16 14h-3v3h-2v-3H8v-2h3V9h2v3h3z"></svg:path>`,
})
export class TdesignFolderAdd1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
