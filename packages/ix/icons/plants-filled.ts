import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPlantsFilledIcon],svg[ix-plants-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.334 170.667v128L192 245.334v53.333l106.667-53.333v181.333h-256v-256zM256 42.667v128l106.667-53.333v53.333l106.667-53.333v181.333H320v-87.851l-106.666 53.312V42.667z"></svg:path>`,
})
export class IxPlantsFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
