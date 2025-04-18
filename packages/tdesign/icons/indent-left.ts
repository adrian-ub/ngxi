import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignIndentLeftIcon],svg[tdesign-indent-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v2h20V4zm6 7v2h14v-2zm-6 7h20v2H2zm-.414-6l3.182 3.182l1.414-1.414L4.414 12l1.768-1.768l-1.414-1.414z"></svg:path>`,
})
export class TdesignIndentLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
