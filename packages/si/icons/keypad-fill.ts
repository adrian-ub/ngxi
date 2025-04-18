import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siKeypadFillIcon],svg[si-keypad-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-7 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m7 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4m9-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0M7 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m12 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-5 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-9 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m16-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class SiKeypadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
