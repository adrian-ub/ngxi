import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsAddRhombusIcon],svg[proicons-add-rhombus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.775 14.475a3.5 3.5 0 0 1 0-4.95l5.75-5.75a3.5 3.5 0 0 1 4.95 0l5.75 5.75a3.5 3.5 0 0 1 0 4.95l-5.75 5.75a3.5 3.5 0 0 1-4.95 0zM8.25 12H12m0 0h3.75M12 12V8.25M12 12v3.75"></svg:path>`,
})
export class ProiconsAddRhombusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
