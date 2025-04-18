import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonLocationFillIcon],svg[iconamoon-location-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.48 7.519c1.214-2.55-1.448-5.213-3.999-3.999L4.822 9.072c-2.39 1.138-2.242 4.589.237 5.518l2.739 1.027a1 1 0 0 1 .585.585l1.027 2.74c.93 2.478 4.38 2.626 5.518.236z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonLocationFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
