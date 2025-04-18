import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLinktreeLogoLightIcon],svg[ph-linktree-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 160v72a6 6 0 0 1-12 0v-72a6 6 0 0 1 12 0m74-62h-65.52l45.76-45.76a6 6 0 0 0-8.48-8.48L134 89.52V24a6 6 0 0 0-12 0v65.52L76.24 43.76a6 6 0 0 0-8.48 8.48L113.52 98H48a6 6 0 0 0 0 12h65.52l-45.76 45.76a6 6 0 1 0 8.48 8.48L128 112.48l51.76 51.76a6 6 0 0 0 8.48-8.48L142.48 110H208a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhLinktreeLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
