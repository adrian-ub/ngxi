import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixOntologyFilledIcon],svg[ix-ontology-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 149.333h-42.667V192h-64v128h64v42.667H256zm85.333 128h-42.666v128h-85.334V448H64V320h42.667V192H64V64h149.333v42.667h85.334v128h42.666zm128-85.333v128h-128V192z"></svg:path>`,
})
export class IxOntologyFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
