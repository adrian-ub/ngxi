import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDaylioIcon],svg[arcticons-daylio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.11 32.44l21.78.2c-1.07 10.49-22.12 8.64-21.78-.2"></svg:path><svg:ellipse cx="12.11" cy="22.98" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.75" ry="2.39"></svg:ellipse><svg:ellipse cx="35.89" cy="22.98" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.75" ry="2.39"></svg:ellipse><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsDaylioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
