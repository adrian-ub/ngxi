import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDocumentMappingIcon],svg[ix-document-mapping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m307.503 42.668l119.164 119.163v307.504H85.333V42.668zm-17.69 42.667H128v341.333h256V179.521zm72.854 149.333v128h-128v-42.667H256v21.334h85.333v-85.334H234.667v-21.333zm-85.334-64v42.667H256v-21.334h-85.333v85.334h106.666v21.333h-128v-128z"></svg:path>`,
})
export class IxDocumentMappingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
