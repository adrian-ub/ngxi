import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFatundoIcon],svg[whh-fatundo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512.526 1023q-118 0-222-50.5t-175-139.5l201-157q36 43 87 67t109 24q106 0 181-74.5t75-180.5t-75-181t-181-75q-87 0-156 54l157 156q2 47-30 46h-440q-17-1-29-19t-12-39l-2-424q-1-31 46-30l128 128q69-61 156-94.5t182-33.5q104 0 199 40.5t163.5 109t109 163t40.5 199t-40.5 199t-109 163t-163.5 109t-199 40.5"></svg:path>`,
})
export class WhhFatundoIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
