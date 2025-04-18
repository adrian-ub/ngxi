import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChainAlternativeIcon],svg[ix-chain-alternative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 320V192H352v-42.667H160V192h74.667v128H160v42.667h192V320zM192 234.667H85.333v42.666H192zm234.667 0H320v42.666h106.667zm-32 170.666H277.333v64h-42.666v-64H117.333V320H42.667V192h74.666v-85.333h117.334v-64h42.666v64h117.334V192h74.666v128h-74.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxChainAlternativeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
