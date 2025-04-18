import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPhosphorLogoThinIcon],svg[ph-phosphor-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 36H72a4 4 0 0 0-4 4v128a76.08 76.08 0 0 0 76 76a4 4 0 0 0 4-4v-68h4a68 68 0 0 0 0-136M76 55.27L137.16 164H76Zm64 97.46L78.84 44H140ZM76.13 172H140v63.88A68.1 68.1 0 0 1 76.13 172m75.87-8h-4V44h4a60 60 0 0 1 0 120"></svg:path>`,
})
export class PhPhosphorLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
