import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPlcTagIcon],svg[ix-plc-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h256v192h-42.667V106.667H106.667v298.666h170.666L320 448H64zm64 64h128v128H128zm42.667 42.667v42.666h42.666v-42.666zm0 96h42.666v42.666h-42.666zm0 85.333H128v-42.667h42.667zm42.666 0v42.667h-42.666V352zm0 0H256v-42.667h-42.667zm160-74.667l117.334 117.334l-96 96l-117.334-117.334v-96zm-32 42.667H320v21.333h21.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxPlcTagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
