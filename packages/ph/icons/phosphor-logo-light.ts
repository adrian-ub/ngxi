import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPhosphorLogoLightIcon],svg[ph-phosphor-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 34H72a6 6 0 0 0-6 6v128a78.09 78.09 0 0 0 78 78a6 6 0 0 0 6-6v-66h2a70 70 0 0 0 0-140M78 62.91L133.74 162H78Zm60 82.19L82.26 46H138ZM78.28 174H138v59.73A66.1 66.1 0 0 1 78.28 174M152 162h-2V46h2a58 58 0 0 1 0 116"></svg:path>`,
})
export class PhPhosphorLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
