import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPlantsIcon],svg[ix-plants-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.334 170.667v128L192 245.334v53.333l106.667-53.333v181.333h-256v-256zM256 320H85.334v64H256zm0-277.333v128l106.667-53.333v53.333l106.667-53.333v181.333H320V256h106.667v-64H256v50.803l-42.666 21.325V42.667z"></svg:path>`,
})
export class IxPlantsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
