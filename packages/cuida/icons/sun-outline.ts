import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaSunOutlineIcon],svg[cuida-sun-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 8.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M6.5 12a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0M12 2a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m0 16.5a1 1 0 0 1 1 1V21a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1M5.5 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h1.5a1 1 0 0 1 1 1M22 12a1 1 0 0 1-1 1h-1.5a1 1 0 1 1 0-2H21a1 1 0 0 1 1 1M7.404 16.596a1 1 0 0 1 0 1.414l-1.06 1.061a1 1 0 0 1-1.415-1.414l1.06-1.06a1 1 0 0 1 1.415 0ZM19.071 4.929a1 1 0 0 1 0 1.414l-1.06 1.06a1 1 0 1 1-1.415-1.413l1.06-1.061a1 1 0 0 1 1.415 0m-2.475 11.667a1 1 0 0 1 1.414 0l1.061 1.06a1 1 0 0 1-1.414 1.415l-1.06-1.06a1 1 0 0 1 0-1.415ZM4.929 4.929a1 1 0 0 1 1.414 0l1.06 1.06A1 1 0 1 1 5.99 7.405l-1.061-1.06a1 1 0 0 1 0-1.415Z" clip-rule="evenodd"></svg:path>`,
})
export class CuidaSunOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
