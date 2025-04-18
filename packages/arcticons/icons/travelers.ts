import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTravelersIcon],svg[arcticons-travelers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 7.873c-12.514 0-17.428 9.694-18.5 12.33c3.845-2.559 8.543-2.426 12.062 0c3.845-2.559 9.357-2.426 12.876 0c3.52-2.426 8.217-2.559 12.062 0c-1.072-2.636-5.986-12.33-18.5-12.33"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.455 37.224a2.904 2.904 0 0 0 5.808 0V18.336"></svg:path>`,
})
export class ArcticonsTravelersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
