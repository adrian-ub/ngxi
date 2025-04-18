import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCashRegisterFillIcon],svg[ph-cash-register-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m239.76 158.06l-22.48-89.94A16 16 0 0 0 201.75 56H136V40a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v16h-9.75a16 16 0 0 0-15.53 12.12l-22.48 89.94A8 8 0 0 0 16 160v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a8 8 0 0 0-.24-1.94M168 88h16a8 8 0 0 1 0 16h-16a8 8 0 0 1 0-16m0 32h16a8 8 0 0 1 0 16h-16a8 8 0 0 1 0-16m-32-32a8 8 0 0 1 0 16h-16a8 8 0 0 1 0-16Zm8 40a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8M80 40h40v16H80Zm-8 48h16a8 8 0 0 1 0 16H72a8 8 0 0 1 0-16m0 32h16a8 8 0 0 1 0 16H72a8 8 0 0 1 0-16m152 72H32v-24h192Z"></svg:path>`,
})
export class PhCashRegisterFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
