import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWbIncandescentIcon],svg[material-symbols-light-wb-incandescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 21.5v-2.73h1v2.73zm-9-9v-1h2.73v1zm16.27 0v-1h2.73v1zm-.731 6.746L16.13 17.34l.707-.708l1.908 1.907zm-12.078 0l-.707-.707L7.16 16.63l.708.707zM12 16q-1.671 0-2.835-1.164Q8 13.67 8 12q0-1.084.538-1.997T10 8.538V4.692h4V8.54q.925.552 1.463 1.464T16 12q0 1.671-1.164 2.836Q13.67 16 12 16m-1-7.861q.25-.07.49-.104Q11.73 8 12 8t.51.034t.49.104V5.692h-2z"></svg:path>`,
})
export class MaterialSymbolsLightWbIncandescentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
