import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsServer16SolidIcon],svg[heroicons-server-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.665 3.588A2 2 0 0 1 5.622 2h4.754a2 2 0 0 1 1.958 1.588l1.098 5.218a3.5 3.5 0 0 0-1.433-.306H4a3.5 3.5 0 0 0-1.433.306z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4 10a2 2 0 1 0 0 4h8a2 2 0 1 0 0-4zm8 2.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M9.75 12a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsServer16SolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
