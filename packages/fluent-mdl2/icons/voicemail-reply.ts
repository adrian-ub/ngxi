import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2VoicemailReplyIcon],svg[fluent-mdl2-voicemail-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1392 1280H384q-80 0-149-30t-122-82t-83-122T0 896q0-79 30-149t82-122t122-83t150-30q79 0 149 30t122 82t83 123t30 149q0 72-26 137t-74 119h712q-48-53-74-118t-26-138q0-79 30-149t82-122t122-83t150-30q79 0 149 30t122 82t83 123t30 149q0 68-23 130t-64 112t-97 85t-123 49l-125-125q12 2 24 3t24 2q53 0 99-20t82-55t55-81t20-100q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100q0 73 38 134t103 94zM384 1152q53 0 99-20t82-55t55-81t20-100q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100q0 53 20 99t55 82t81 55t100 20m1408 384q53 0 99 20t82 55t55 81t20 100q0 53-20 99t-55 82t-81 55t-100 20v-128q27 0 50-10t40-27t28-41t10-50q0-27-10-50t-27-40t-41-28t-50-10h-293l162 163l-90 90l-317-317l317-317l90 90l-162 163z"></svg:path>`,
})
export class FluentMdl2VoicemailReplyIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
