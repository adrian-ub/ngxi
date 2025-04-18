import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteCssSolidIcon],svg[flowbite-css-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 2l1.578 17.834L12 22l7.468-2.165L21 2zm13.3 14.722l-4.293 1.204H12l-4.297-1.204l-.297-3.167h2.108l.15 1.526l2.335.639l2.34-.64l.245-3.05h-7.27l-.187-2.006h7.64l.174-2.006H6.924l-.176-2.006h10.506z"></svg:path>`,
})
export class FlowbiteCssSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
