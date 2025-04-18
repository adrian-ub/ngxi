import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2UnlockSolidIcon],svg[fluent-mdl2-unlock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 896v1152H256V896h1152V512q0-82-29-152t-80-122t-122-81t-153-29t-152 29t-122 80t-81 122t-29 153H512q0-109 39-202t108-163T821 39t203-39q109 0 202 39t163 108t108 162t39 203v384z"></svg:path>`,
})
export class FluentMdl2UnlockSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
