import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCreateNewFolderIcon],svg[ic-sharp-create-new-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6H12l-2-2H2v16h20zm-3 8h-3v3h-2v-3h-3v-2h3V9h2v3h3z"></svg:path>`,
})
export class IcSharpCreateNewFolderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
