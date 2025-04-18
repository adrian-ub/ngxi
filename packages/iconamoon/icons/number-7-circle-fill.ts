import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber7CircleFillIcon],svg[iconamoon-number-7-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m7-6a1 1 0 0 0 0 2h4.523l-3.451 8.629a1 1 0 0 0 1.857.742l4-10A1 1 0 0 0 15 6z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonNumber7CircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
