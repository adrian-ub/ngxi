import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCode1Icon],svg[tdesign-code-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.586 12l4.95-4.95L6.95 8.464L3.414 12l3.536 3.535l-1.414 1.414zm16.464 3.535L20.586 12L17.05 8.464l1.415-1.414l4.95 4.95l-4.95 4.95z"></svg:path>`,
})
export class TdesignCode1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
