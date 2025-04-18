import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsMovie16Icon],svg[qlementine-icons-movie-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 1C2.34 1 1 2.34 1 4v7c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zM2 7V5h2v2zm0-3h2V2c-1.1 0-2 .895-2 2m3-2h6v5H5zm7 2V2c1.1 0 2 .895 2 2zm0 1h2v2h-2zm0 3h2v2h-2zm0 3h2c0 1.1-.895 2-2 2zm-1 2H5V8h6zm-7-2v2c-1.1 0-2-.895-2-2zm0-1H2V8h2z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsMovie16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
