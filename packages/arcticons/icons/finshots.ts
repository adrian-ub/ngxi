import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFinshotsIcon],svg[arcticons-finshots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.898 9.483h36.204m-16.376 6.196H11.209L16.432 42.5h15.579l3.188-16.376h-5.437l2.371-10.445m8.729-6.196L39.535 5.5H8.908L7.58 9.483m15.668 16.641H13.243"></svg:path>`,
})
export class ArcticonsFinshotsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
