import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TrainSolidIcon],svg[fluent-mdl2-train-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1882 2048h-181l-256-256H602l-256 256H165l259-258q-36-4-67-21t-53-42t-35-58t-13-69V192q0-40 15-75t41-61t61-41t75-15h1152q40 0 75 15t61 41t41 61t15 75v1408q0 36-13 68t-35 58t-53 43t-67 21zM768 384h512V256H768zm896 768V640H384v512zM576 1536q26 0 45-19t19-45t-19-45t-45-19t-45 19t-19 45t19 45t45 19m896 0q26 0 45-19t19-45t-19-45t-45-19t-45 19t-19 45t19 45t45 19"></svg:path>`,
})
export class FluentMdl2TrainSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
