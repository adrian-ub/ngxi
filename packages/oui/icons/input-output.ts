import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiInputOutputIcon],svg[oui-input-output-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 13.999v-2.99h1V15H0V1h11v3.999h-1V2.001H1v11.998z"></svg:path><svg:path d="M4.5 10V9H11v1zm8.5-.5l3-3l-3-3z"></svg:path><svg:path d="M5.5 6.5v6l-3-3zM7 7V6h6.5v1z"></svg:path></svg:g>`,
})
export class OuiInputOutputIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
