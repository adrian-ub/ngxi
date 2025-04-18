import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDocumentMappingFilledIcon],svg[ix-document-mapping-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 161.831L307.503 42.668H85.333v426.667h341.334zm-277.334 8.837h128v42.667H256v-21.334h-85.333v85.334h106.666v21.333h-128zm85.334 64h128v128h-128v-42.667H256v21.334h85.333v-85.334H234.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxDocumentMappingFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
