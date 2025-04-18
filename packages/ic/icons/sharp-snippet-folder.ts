import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSnippetFolderIcon],svg[ic-sharp-snippet-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 6l-2-2H2v16h20V6zm7 11h-6V9h3.5l2.5 2.5zm-3.12-6.5l1.62 1.62v3.38h-3v-5z"></svg:path>`,
})
export class IcSharpSnippetFolderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
