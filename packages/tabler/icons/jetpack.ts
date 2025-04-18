import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerJetpackIcon],svg[tabler-jetpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6a3 3 0 1 0-6 0v7h6zm4 7h6V6a3 3 0 0 0-6 0zm-9 3q0 3.5 2 5q2-1.5 2-5m6 0q0 3.5 2 5q2-1.5 2-5m-9-8h4m-4 3h4"></svg:path>`,
})
export class TablerJetpackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
