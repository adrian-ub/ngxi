import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCellarIcon],svg[iconoir-cellar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 21h18v-9a9 9 0 1 0-18 0zm0-4h18"></svg:path><svg:path d="M9 17v-4h12m-8 0V9h7"></svg:path></svg:g>`,
})
export class IconoirCellarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
