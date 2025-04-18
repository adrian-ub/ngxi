import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsPiano16Icon],svg[qlementine-icons-piano-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 14c-.663 0-1.3-.263-1.77-.732a2.5 2.5 0 0 1-.732-1.77v-7c0-.663.263-1.3.732-1.77a2.5 2.5 0 0 1 1.77-.732h11c.663 0 1.3.263 1.77.732c.469.469.732 1.1.732 1.77v7c0 .663-.263 1.3-.732 1.77c-.469.469-1.1.732-1.77.732zM4 3H2.5a1.5 1.5 0 0 0-1.499 1.499v7A1.5 1.5 0 0 0 2.5 12.998H5v-3a.997.997 0 0 1-1-1v-6zm5 0H7v6a.997.997 0 0 1-1 1v3h4v-3a.997.997 0 0 1-1-1zm4.5 0H12v6a.997.997 0 0 1-1 1v3h2.5a1.5 1.5 0 0 0 1.499-1.499v-7A1.5 1.5 0 0 0 13.5 3.002z"></svg:path>`,
})
export class QlementineIconsPiano16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
