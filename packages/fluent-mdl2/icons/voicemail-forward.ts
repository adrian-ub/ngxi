import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2VoicemailForwardIcon],svg[fluent-mdl2-voicemail-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1725 1283l317 317l-317 317l-90-90l163-163h-518v-128h518l-163-163zm-178-3H384q-80 0-149-30t-122-82t-83-122T0 896q0-79 30-149t82-122t122-83t150-30q79 0 149 30t122 82t83 123t30 149q0 72-26 137t-74 119h712q-48-53-74-118t-26-138q0-79 30-149t82-122t122-83t150-30q79 0 149 30t122 82t83 123t30 149q0 52-14 101t-39 92t-62 79t-81 61l-95-95q36-15 66-39t51-55t34-68t12-76q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100q0 53 20 99t55 82t81 55t100 20h6q3 0 6-1zM384 1152q53 0 99-20t82-55t55-81t20-100q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100q0 53 20 99t55 82t81 55t100 20"></svg:path>`,
})
export class FluentMdl2VoicemailForwardIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
