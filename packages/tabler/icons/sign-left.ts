import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSignLeftIcon],svg[tabler-sign-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21h-4m2 0V11m0-5V3m4 3H8L6 8.5L8 11h10z"></svg:path>`,
})
export class TablerSignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
