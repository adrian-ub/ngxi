import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKlarnaIcon],svg[arcticons-klarna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 7.914h7.769v32.172H4.5z"></svg:path><svg:circle cx="39.584" cy="36.17" r="3.916" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.591 26.03A22.86 22.86 0 0 0 31.49 7.914h-8.162a18.05 18.05 0 0 1-11.06 16.507l12.797 15.665h9.007Z"></svg:path>`,
})
export class ArcticonsKlarnaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
