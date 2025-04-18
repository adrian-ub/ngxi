import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiMagnetIcon],svg[mynaui-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7.5V12a9 9 0 1 0 18 0V7.5m-18 0V5a2 2 0 0 1 2-2h1.625a2 2 0 0 1 2 2v2.5M3 7.5h5.625m0 0V12a3.375 3.375 0 1 0 6.75 0V7.5m0 0V5a2 2 0 0 1 2-2H19a2 2 0 0 1 2 2v2.5m-5.625 0H21"></svg:path>`,
})
export class MynauiMagnetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
