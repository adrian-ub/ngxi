import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChainParallelIcon],svg[ix-chain-parallel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 192v128h-74.666v85.333H448V448H64v-42.667h53.333V320H42.667V192h74.666v-85.333H64V64h384v42.667h-53.333V192zM192 234.667H85.333v42.666H192zm234.667 0H320v42.666h106.667zm-74.667-128H160V192h74.667v128H160v85.333h192V320h-74.667V192H352z" clip-rule="evenodd"></svg:path>`,
})
export class IxChainParallelIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
