import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTableTagIcon],svg[ix-table-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 85.336H42.667v341.333h256L256 384.003h-42.667v-42.667H256v-42.667h-42.667v-42.666h213.334v42.666l42.666 42.667zM170.667 298.669v-42.666H85.333v42.666zm-85.334 42.667v42.667h85.334v-42.667zm341.334-170.667v42.667h-85.334v-42.667zm-128 0v42.667h-85.334v-42.667zm-128 0v42.667H85.333v-42.667zm320 224L373.333 277.336h-96v96l117.334 117.333zM320 320.003h21.333v21.333H320z" clip-rule="evenodd"></svg:path>`,
})
export class IxTableTagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
