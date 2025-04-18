import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBadooIcon],svg[arcticons-badoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.053 9.867a10.014 10.014 0 0 1 8.447 9.89a19.5 19.5 0 0 1-39 0A9.993 9.993 0 0 1 24 16.663a9.95 9.95 0 0 1 11.053-6.796"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.568 21.338a8.432 8.432 0 0 0 16.864 0"></svg:path>`,
})
export class ArcticonsBadooIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
