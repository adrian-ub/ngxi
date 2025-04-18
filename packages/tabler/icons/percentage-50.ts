import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPercentage50Icon],svg[tabler-percentage-50-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" d="M12 21a9 9 0 0 0 0-18m0 0v18" stroke="none"></svg:path><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0"></svg:path></svg:g>`,
})
export class TablerPercentage50Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
