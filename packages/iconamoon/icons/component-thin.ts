import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonComponentThinIcon],svg[iconamoon-component-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m12 3l3 3l-3 3l-3-3zm0 12l3 3l-3 3l-3-3zm6-6l3 3l-3 3l-3-3zM6 9l3 3l-3 3l-3-3z"></svg:path>`,
})
export class IconamoonComponentThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
