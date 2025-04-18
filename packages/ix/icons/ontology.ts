import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixOntologyIcon],svg[ix-ontology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 149.333h-42.667V192h-64v128h64v42.667H256zm-85.333 213.334h-64v42.666h64zm0-256h-64v42.666h64zm170.666 170.666h-42.666v128h-85.334V448H64V320h42.667V192H64V64h149.333v42.667h85.334v128h42.666zm128-85.333v128h-128V192zm-42.666 42.667H384v42.666h42.667z"></svg:path>`,
})
export class IxOntologyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
