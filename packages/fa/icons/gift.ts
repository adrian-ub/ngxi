import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faGiftIcon],svg[fa-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 1164V448H608v716q0 25 18 38.5t46 13.5h192q28 0 46-13.5t18-38.5M472 320h195L541 159q-26-31-69-31q-40 0-68 28t-28 68t28 68t68 28m688-96q0-40-28-68t-68-28q-43 0-69 31L870 320h194q40 0 68-28t28-68m376 256v320q0 14-9 23t-23 9h-96v416q0 40-28 68t-68 28H224q-40 0-68-28t-28-68V832H32q-14 0-23-9t-9-23V480q0-14 9-23t23-9h440q-93 0-158.5-65.5T248 224t65.5-158.5T472 0q107 0 168 77l128 165L896 77q61-77 168-77q93 0 158.5 65.5T1288 224t-65.5 158.5T1064 448h440q14 0 23 9t9 23"></svg:path>`,
})
export class FaGiftIcon {
  readonly viewBox = input("0 0 1536 1344")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
