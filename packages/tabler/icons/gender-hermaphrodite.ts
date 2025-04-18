import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGenderHermaphroditeIcon],svg[tabler-gender-hermaphrodite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 14v7m-3-3h6M12 6a4 4 0 1 1 0 8a4 4 0 0 1 0-8"></svg:path><svg:path d="M15 3a3 3 0 1 1-6 0"></svg:path></svg:g>`,
})
export class TablerGenderHermaphroditeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
