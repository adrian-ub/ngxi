import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsMenuMeatballs2Icon],svg[lineicons-menu-meatballs-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.319 14.249a2.248 2.248 0 1 1 0-4.497a2.248 2.248 0 0 1 0 4.496M5.57 12a.748.748 0 1 0 1.497 0a.748.748 0 0 0-1.497 0m6.745 2.249a2.248 2.248 0 1 1 0-4.497a2.248 2.248 0 0 1 0 4.496M11.567 12a.748.748 0 1 0 1.496 0a.748.748 0 0 0-1.496 0m4.497 0a2.248 2.248 0 1 0 4.496 0a2.248 2.248 0 0 0-4.496 0m2.248.749a.748.748 0 1 1 0-1.497a.748.748 0 0 1 0 1.496" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsMenuMeatballs2Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
