import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SkypeArrowIcon],svg[fluent-mdl2-skype-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1980 964q0 41-15 77t-43 63t-63 42t-77 16H739l281 280q28 27 43 64t15 76q0 41-15 77t-43 63t-63 42t-77 16q-39 0-75-15t-65-43l-615-616q-33-33-47-68t-14-82q0-39 17-73t44-61l615-616q28-28 65-43t76-15q41 0 77 16t62 43t42 63t16 77q0 39-15 75t-43 64L739 766h1043q41 0 77 15t63 43t42 63t16 77"></svg:path>`,
})
export class FluentMdl2SkypeArrowIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
