import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEraserSize5Icon],svg[material-symbols-light-eraser-size-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.185 20Q7.6 20 5.8 18.2T4 13.816q0-1.178.452-2.311t1.367-2.05l3.675-3.674q.916-.916 2.04-1.358t2.32-.442q2.565 0 4.365 1.8t1.8 4.365q0 1.196-.442 2.32t-1.358 2.04l-3.675 3.675q-.915.915-2.049 1.367t-2.31.452"></svg:path>`,
})
export class MaterialSymbolsLightEraserSize5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
