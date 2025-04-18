import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosReasonmlIconIcon],svg[logos-reasonml-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#DD4B39" d="M0 0h256v256H0z"></svg:path><svg:path fill="#FFF" d="M151.33 232.674h-28.85l-14.215-27.038H89.311v27.038H63.807v-97.697h43.9c25.923 0 40.696 12.543 40.696 34.284c0 14.773-6.132 25.644-17.42 31.497zm-62.019-77.35v29.964h18.536c10.313 0 16.306-5.295 16.306-15.19c0-9.617-5.993-14.774-16.306-14.774zm75.398-20.347h77.07v20.347h-51.565v18.258h46.548v20.208l-46.548.14v18.396h52.96v20.348h-78.465z"></svg:path>`,
})
export class LogosReasonmlIconIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
