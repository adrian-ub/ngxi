import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelCheckboxIcon],svg[raphael-checkbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 27.5H6A1.5 1.5 0 0 1 4.5 26V6c0-.83.67-1.5 1.5-1.5h20c.828 0 1.5.67 1.5 1.5v20a1.5 1.5 0 0 1-1.5 1.5m-18.5-3h17v-17h-17z"></svg:path>`,
})
export class RaphaelCheckboxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
