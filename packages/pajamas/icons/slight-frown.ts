import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasSlightFrownIcon],svg[pajamas-slight-frown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 8a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0M6.63 9.616a2.75 2.75 0 0 1 3.751 1.009a.75.75 0 0 1-1.299.75a1.25 1.25 0 0 0-2.163-.003a.75.75 0 1 1-1.297-.753a2.75 2.75 0 0 1 1.007-1.003Z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasSlightFrownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
