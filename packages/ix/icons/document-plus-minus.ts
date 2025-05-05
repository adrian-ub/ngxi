import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDocumentPlusMinusIcon],svg[ix-document-plus-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M307.503 42.667L426.667 161.83v307.503H85.333V42.666zm-17.69 42.666H128v341.334h256V179.52zM277.333 192v-42.667h-42.666V192H192v42.667h42.667v42.666h42.666v-42.666H320V192zM320 320v42.666H192V320z" clip-rule="evenodd"></svg:path>`,
})
export class IxDocumentPlusMinusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
