import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PrecipitationIcon],svg[fluent-mdl2-precipitation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1607 1166q28 57 42 118t15 124q0 88-23 170t-64 153t-100 129t-130 100t-153 65t-170 23t-170-23t-153-64t-129-100t-100-130t-65-153t-23-170q0-63 14-124t43-118L1024 0zm-583 754q106 0 199-40t163-109t110-163t40-200q0-48-11-95t-33-90l-468-937l-468 937q-22 43-33 90t-11 95q0 106 40 199t109 163t163 110t200 40"></svg:path>`,
})
export class FluentMdl2PrecipitationIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
