import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixRulerVerticalIcon],svg[ix-ruler-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341.333 42.668v426.667H170.667V42.668zm-42.666 42.667h-85.334v341.333h85.334v-42.667H256v-42.666h42.667v-64H256v-42.667h42.667v-64H256v-42.667h42.667z"></svg:path>`,
})
export class IxRulerVerticalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
