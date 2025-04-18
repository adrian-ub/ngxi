import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTargetOffIcon],svg[tabler-target-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11.286 11.3a1 1 0 0 0 1.41 1.419"></svg:path><svg:path d="M8.44 8.49a5 5 0 0 0 7.098 7.044m1.377-2.611a5 5 0 0 0-5.846-5.836"></svg:path><svg:path d="M5.649 5.623a9 9 0 1 0 12.698 12.758m1.683-2.313A9 9 0 0 0 7.954 3.958M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerTargetOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
