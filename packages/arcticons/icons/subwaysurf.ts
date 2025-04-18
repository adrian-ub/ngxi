import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSubwaysurfIcon],svg[arcticons-subwaysurf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.15 10.82h13.7A4.22 4.22 0 0 1 35.07 15v26.39A2.11 2.11 0 0 1 33 43.5H15a2.11 2.11 0 0 1-2.11-2.11V15a4.22 4.22 0 0 1 4.26-4.18"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.22 4.5h-8.44l-1.05 6.32h10.54z"></svg:path><svg:circle cx="24" cy="7.66" r="1.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.93 18.2h22.14M12.93 38.23h22.14m-15.34-4.66a3.85 3.85 0 0 0 3.36 1.5h2a3.43 3.43 0 0 0 3.42-3.43h0a3.42 3.42 0 0 0-3.42-3.42h-2.21a3.43 3.43 0 0 1-3.42-3.43h0a3.43 3.43 0 0 1 3.42-3.43h2a3.83 3.83 0 0 1 3.36 1.51"></svg:path>`,
})
export class ArcticonsSubwaysurfIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
