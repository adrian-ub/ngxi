import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceValidationCheckCheckFormValidationCheckmarkSuccessAddAdditionIcon],svg[streamline-interface-validation-check-check-form-validation-checkmark-success-add-addition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 8.55l2.73 3.51a1 1 0 0 0 .78.39a1 1 0 0 0 .78-.36L13.5 1.55"></svg:path>`,
})
export class StreamlineInterfaceValidationCheckCheckFormValidationCheckmarkSuccessAddAdditionIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
