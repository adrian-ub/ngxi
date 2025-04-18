import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPasteIcon],svg[ix-paste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 42.667h149.334v42.666H384v128h-42.667V128h-42.666v42.667H149.333V128h-42.666v256h128v42.667H64V85.333h85.333zM256 128V85.333h-64V128zm149.333 298.667H298.667V277.333h67.66l39.006 39.007zm42.667-128l-64-64H256v234.666h192z" clip-rule="evenodd"></svg:path>`,
})
export class IxPasteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
