import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTelegraphIcon],svg[arcticons-telegraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 24A21.5 21.5 0 1 1 24 45.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.73 23.465l18-8.014a1.174 1.174 0 0 1 1.638 1.243l-2.417 16.39a1.173 1.173 0 0 1-1.994.655l-2.982-3.007a21.1 21.1 0 0 0-10.102-5.674l-2.04-.486a.587.587 0 0 1-.104-1.107"></svg:path>`,
})
export class ArcticonsTelegraphIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
