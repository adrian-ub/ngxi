import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ToggleRightIcon],svg[fluent-mdl2-toggle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1898 662q73 73 111 166t39 196q0 103-38 196t-112 166q-73 73-166 111t-196 39H512q-103 0-196-38t-166-112q-73-73-111-166T0 1024q0-103 38-196t112-166q73-73 166-111t196-39h1024q103 0 196 38t166 112m-362 746q79 0 149-30t122-82t83-122t30-150q0-79-30-149t-82-122t-123-83t-149-30H512q-80 0-149 30t-122 82t-83 123t-30 149q0 80 30 149t82 122t122 83t150 30zm0-640q53 0 99 20t82 55t55 81t20 100q0 53-20 99t-55 82t-81 55t-100 20q-53 0-99-20t-82-55t-55-81t-20-100q0-53 20-99t55-82t81-55t100-20"></svg:path>`,
})
export class FluentMdl2ToggleRightIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
