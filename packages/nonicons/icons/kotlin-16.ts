import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[noniconsKotlin16Icon],svg[nonicons-kotlin-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 2A.75.75 0 0 1 2 1.25h12a.75.75 0 0 1 .53 1.28L9.06 8l5.47 5.47a.75.75 0 0 1-.53 1.28H2a.75.75 0 0 1-.75-.75zm1.5.75v10.5h9.44L7.47 8.53a.75.75 0 0 1 0-1.06l4.72-4.72z" clip-rule="evenodd"></svg:path>`,
})
export class NoniconsKotlin16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
