import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsCamera16Icon],svg[qlementine-icons-camera-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 10v1c0 1.1-.895 2-2 2H2c-1.1 0-2-.895-2-2V5c0-1.1.895-2 2-2h7c1.1 0 2 .895 2 2v1l1.71-1.71a1 1 0 0 1 .707-.293h1.59a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1.59a1 1 0 0 1-.707-.293L11 9.994zM2 4h7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m9 4.59L13.41 11H15V5h-1.59L11 7.41v1.17z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsCamera16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
