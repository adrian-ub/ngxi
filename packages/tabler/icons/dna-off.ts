import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDnaOffIcon],svg[tabler-dna-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 12a3.9 3.9 0 0 0-1.172-2.828A4.03 4.03 0 0 0 12 8M9.172 9.172a4 4 0 1 0 5.656 5.656"></svg:path><svg:path d="M9.172 20.485a4 4 0 1 0-5.657-5.657M14.828 3.515a4 4 0 1 0 5.657 5.657M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerDnaOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
