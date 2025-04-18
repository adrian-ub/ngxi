import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilLockUnlockedIcon],svg[cil-lock-unlocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 200v-56a128 128 0 0 0-217.582-91.43l22.4 22.855A96 96 0 0 1 352 144v56H88v128c0 92.636 75.364 168 168 168s168-75.364 168-168V200Zm8 128c0 74.99-61.009 136-136 136s-136-61.01-136-136v-96h272Z"></svg:path>`,
})
export class CilLockUnlockedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
