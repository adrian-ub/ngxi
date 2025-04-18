import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsStop24Icon],svg[qlementine-icons-stop-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10.4c0-2.24 0-3.36.436-4.22a4.03 4.03 0 0 1 1.75-1.75c.856-.436 1.98-.436 4.22-.436h3.2c2.24 0 3.36 0 4.22.436c.753.384 1.36.995 1.75 1.75c.436.856.436 1.98.436 4.22v3.2c0 2.24 0 3.36-.436 4.22a4.03 4.03 0 0 1-1.75 1.75c-.856.436-1.98.436-4.22.436h-3.2c-2.24 0-3.36 0-4.22-.436a4.03 4.03 0 0 1-1.75-1.75C4 16.964 4 15.84 4 13.6z"></svg:path>`,
})
export class QlementineIconsStop24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
