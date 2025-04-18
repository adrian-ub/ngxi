import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDocumentFailIcon],svg[ix-document-fail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M307.503 42.667L426.666 161.83v307.504H85.333V42.667zm-17.69 42.667H128v341.333h256V179.52zm4.437 123.669l30.166 30.165l-38.251 38.251l38.25 38.25l-30.165 30.166l-38.25-38.25l-38.251 40.383l-30.165-30.165l38.25-40.384l-38.25-38.25l30.165-30.166l38.25 38.25z"></svg:path>`,
})
export class IxDocumentFailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
