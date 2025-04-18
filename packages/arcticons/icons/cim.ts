import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCimIcon],svg[arcticons-cim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.371 19.319v9.362m2.768-.01v-9.352l4.68 9.362l4.681-9.347v9.347m-14.798-3.14v.039a3.1 3.1 0 0 1-3.101 3.1h0a3.1 3.1 0 0 1-3.101-3.1v-3.16a3.1 3.1 0 0 1 3.101-3.1h0a3.1 3.1 0 0 1 3.101 3.1v.038"></svg:path>`,
})
export class ArcticonsCimIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
