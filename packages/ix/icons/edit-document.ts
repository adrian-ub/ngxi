import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixEditDocumentIcon],svg[ix-edit-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M192 224L373.334 42.667l96 96L288 320h-96zm217.003-85.333l-35.669-35.67l-29.387 29.386l35.67 35.67zM234.667 241.664l79.111-79.111l35.669 35.67l-79.111 79.11h-35.669zm106.666 163.669V295.006L384 252.34V448H85.334V64H320l-42.667 42.667H128v298.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxEditDocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
