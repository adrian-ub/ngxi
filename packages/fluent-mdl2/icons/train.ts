import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TrainIcon],svg[fluent-mdl2-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 1536q-26 0-45-19t-19-45t19-45t45-19t45 19t19 45t-19 45t-45 19m896 0q-26 0-45-19t-19-45t19-45t45-19t45 19t19 45t-19 45t-45 19M1280 384H768V256h512zm165 1408H603l-256 256H165l258-258q-35-4-65-21t-53-42t-36-58t-13-69V192q0-40 15-75t41-61t61-41t75-15h1152q40 0 75 15t61 41t41 61t15 75v1408q0 36-13 68t-35 58t-53 43t-66 21l258 258h-182zm219-1152H384v512h1280zM448 128q-26 0-45 19t-19 45v320h1280V192q0-26-19-45t-45-19zm-64 1472q0 26 19 45t45 19h1152q26 0 45-19t19-45v-320H384z"></svg:path>`,
})
export class FluentMdl2TrainIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
