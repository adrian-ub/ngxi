import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2HeartFillIcon],svg[fluent-mdl2-heart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1889 287q53 53 88 116t53 131t18 138t-17 138t-53 131t-89 116l-865 864l-865-864q-53-53-88-116T18 811T0 673t17-139t53-131t89-116q78-77 177-118t208-41t208 41t177 118l95 96l95-96q78-77 177-118t208-41t208 41t177 118"></svg:path>`,
})
export class FluentMdl2HeartFillIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
