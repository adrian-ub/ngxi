import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceValidationCheckCircleCheckmarkAdditionCircleSuccessCheckValidationAddFormIcon],svg[streamline-interface-validation-check-circle-checkmark-addition-circle-success-check-validation-add-form-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m4 8l2.05 1.64a.48.48 0 0 0 .4.1a.5.5 0 0 0 .34-.24L10 4"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceValidationCheckCircleCheckmarkAdditionCircleSuccessCheckValidationAddFormIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
