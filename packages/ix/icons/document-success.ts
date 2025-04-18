import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDocumentSuccessIcon],svg[ix-document-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M307.503 42.667L426.666 161.83v307.504H85.333V42.667zm-17.69 42.667H128v341.333h256V179.52zm15.104 134.252l30.165 30.166l-100.416 100.416l-57.749-57.75l30.165-30.165l27.584 27.584z"></svg:path>`,
})
export class IxDocumentSuccessIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
