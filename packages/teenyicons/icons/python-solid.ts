import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPythonSolidIcon],svg[teenyicons-python-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12H1.5A1.5 1.5 0 0 1 0 10.5v-5A1.5 1.5 0 0 1 1.5 4H8V3H7V2H6v1H4V1.5A1.5 1.5 0 0 1 5.5 0h4A1.5 1.5 0 0 1 11 1.5v5a.5.5 0 0 1-.5.5h-6A1.5 1.5 0 0 0 3 8.5z"></svg:path><svg:path fill="currentColor" d="M12 3v3.5A1.5 1.5 0 0 1 10.5 8h-6a.5.5 0 0 0-.5.5v5A1.5 1.5 0 0 0 5.5 15h4a1.5 1.5 0 0 0 1.5-1.5V12H9v1H8v-1H7v-1h6.5A1.5 1.5 0 0 0 15 9.5v-5A1.5 1.5 0 0 0 13.5 3z"></svg:path>`,
})
export class TeenyiconsPythonSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
