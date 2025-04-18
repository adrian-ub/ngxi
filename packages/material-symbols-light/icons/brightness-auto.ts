import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBrightnessAutoIcon],svg[material-symbols-light-brightness-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.185 16h.946l1.03-2.608h3.727L14.92 16h.973L12.34 7h-.64zm2.273-3.408l1.492-4.019h.1l1.53 4.02zM12 21.916L9.073 19H5v-4.073L2.085 12L5 9.073V5h4.073L12 2.085L14.927 5H19v4.073L21.916 12L19 14.927V19h-4.073z"></svg:path>`,
})
export class MaterialSymbolsLightBrightnessAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
