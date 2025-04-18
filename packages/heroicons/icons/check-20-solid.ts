import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsCheck20SolidIcon],svg[heroicons-check-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.705 4.153a.75.75 0 0 1 .142 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893l7.48-9.817a.75.75 0 0 1 1.05-.143" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsCheck20SolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
