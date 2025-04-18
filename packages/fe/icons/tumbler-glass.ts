import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feTumblerGlassIcon],svg[fe-tumbler-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3h10a2 2 0 0 1 2 2v10a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6V5a2 2 0 0 1 2-2m0 2v9h10V5z"></svg:path>`,
})
export class FeTumblerGlassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
