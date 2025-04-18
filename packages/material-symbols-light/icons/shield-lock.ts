import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShieldLockIcon],svg[material-symbols-light-shield-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20.962q-3.014-.895-5.007-3.651T5 11.1V5.692l7-2.615l7 2.615V11.1q0 3.454-1.993 6.21T12 20.963m-1.961-5.308h3.922q.344 0 .576-.232t.232-.576v-2.923q0-.343-.232-.575t-.576-.232h-.173v-1q0-.749-.51-1.26q-.51-.51-1.259-.51t-1.259.51t-.51 1.26v1h-.212q-.343 0-.575.232t-.232.575v2.923q0 .344.232.576t.576.232m.98-4.538v-1q0-.425.288-.713t.712-.288t.713.288t.287.713v1z"></svg:path>`,
})
export class MaterialSymbolsLightShieldLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
