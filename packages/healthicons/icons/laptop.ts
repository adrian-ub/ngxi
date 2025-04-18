import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsLaptopIcon],svg[healthicons-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M9 10a2 2 0 0 0-2 2v19a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2zm2 19V14h26v15zM9 13a1 1 0 0 1 1-1h28a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path><svg:path d="M7.06 31.472A1 1 0 0 1 7.91 31h31.972a1 1 0 0 1 .837.453l3.27 5A1 1 0 0 1 43.15 38H4.8a1 1 0 0 1-.85-1.528z"></svg:path></svg:g>`,
})
export class HealthiconsLaptopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
