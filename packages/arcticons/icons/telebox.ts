import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTeleboxIcon],svg[arcticons-telebox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 29.63l-9.75 5.63l-9.75-5.63V18.37l29.25 16.89l9.75-5.63V18.37l-9.75-5.63L24 18.37l19.5 11.26l-29.25-16.89l-9.75 5.63"></svg:path>`,
})
export class ArcticonsTeleboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
