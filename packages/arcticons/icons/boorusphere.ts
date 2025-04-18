import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBoorusphereIcon],svg[arcticons-boorusphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.038 42.5c.183-16.554 9.914-20.46 17.556-22.449c14.448-3.76 21.064 13.1 5.113 22.449z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.038 42.5V18.34c0-7.656 7.03-12.912 13.873-12.84c11.08.119 9.326 9.055 9.77 14.183"></svg:path>`,
})
export class ArcticonsBoorusphereIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
