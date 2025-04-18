import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsAbTestingSolidIcon],svg[teenyicons-ab-testing-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 5A1.5 1.5 0 0 0 2 6.5V8h3V6.5A1.5 1.5 0 0 0 3.5 5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M0 2.5A1.5 1.5 0 0 1 1.5 1h4A1.5 1.5 0 0 1 7 2.5v10A1.5 1.5 0 0 1 5.5 14h-4A1.5 1.5 0 0 1 0 12.5zM2 11V9h3v2h1V6.5a2.5 2.5 0 0 0-5 0V11z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 7h-2V5h2a1 1 0 1 1 0 2m0 3h-2V8h2a1 1 0 1 1 0 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8 2.5A1.5 1.5 0 0 1 9.5 1h4A1.5 1.5 0 0 1 15 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 8 12.5zM12 4H9v7h3a2 2 0 0 0 1.323-3.5A2 2 0 0 0 12 4" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsAbTestingSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
