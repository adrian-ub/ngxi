import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsFileNoAccessOutlineIcon],svg[teenyicons-file-no-access-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m9.5 5.5l-4 4m5-9h-8a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-10zm-3 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"></svg:path>`,
})
export class TeenyiconsFileNoAccessOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
