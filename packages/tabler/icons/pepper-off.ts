import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPepperOffIcon],svg[tabler-pepper-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12.59 12.59C11.82 14.008 10.055 15 8 15c-2.761 0-5-1.79-5-4a8 8 0 0 0 13.643 5.67m1.64-2.357A8 8 0 0 0 19 11a3 3 0 0 0-5.545-1.59"></svg:path><svg:path d="M16 8c0-2 2-4 4-4M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerPepperOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
