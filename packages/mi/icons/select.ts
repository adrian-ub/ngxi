import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[miSelectIcon],svg[mi-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a1 1 0 0 1 .707.293l4 4a1 1 0 0 1-1.414 1.414L12 6.414L8.707 9.707a1 1 0 0 1-1.414-1.414l4-4A1 1 0 0 1 12 4M7.293 14.293a1 1 0 0 1 1.414 0L12 17.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414"></svg:path>`,
})
export class MiSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
