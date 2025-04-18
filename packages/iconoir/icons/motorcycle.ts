import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMotorcycleIcon],svg[iconoir-motorcycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5 19a4 4 0 1 0 0-8a4 4 0 0 0 0 8m14-4l-3-9l1-1"></svg:path><svg:path d="M16 8.5h-4.5l-4.5 3m-1.5 4H12l1-2.5l3.5-4.5m-8 1.5c-2-1.5-5-1.5-7 0M19 19a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path></svg:g>`,
})
export class IconoirMotorcycleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
