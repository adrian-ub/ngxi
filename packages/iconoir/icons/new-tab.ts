import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirNewTabIcon],svg[iconoir-new-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 19V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2 7h20M9 14h3m3 0h-3m0 0v-3m0 3v3"></svg:path></svg:g>`,
})
export class IconoirNewTabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
