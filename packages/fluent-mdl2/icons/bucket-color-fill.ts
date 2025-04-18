import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BucketColorFillIcon],svg[fluent-mdl2-bucket-color-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 1088h1280l-640 640zm1731 534q32 56 32 122q0 47-16 90t-47 76t-71 54t-89 20q-49 0-92-18t-75-50t-51-75t-19-92q0-62 31-116l202-353z"></svg:path>`,
})
export class FluentMdl2BucketColorFillIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
