import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBillsIcon],svg[healthicons-bills-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10.49 32v4a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V20a2 2 0 0 0-2-2H40v3.669a3 3 0 0 0 2.49 1.327V33a3 3 0 0 0-2.983 3H15.485a3 3 0 0 0-2.996-2.962V32z" clip-rule="evenodd"></svg:path><svg:path d="M25 20a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path fill-rule="evenodd" d="M6 10a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2zm2.998 2h24.003A3 3 0 0 0 36 14.996V25a3 3 0 0 0-2.983 3H8.996A3 3 0 0 0 6 25.038V15a3 3 0 0 0 2.998-3" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsBillsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
