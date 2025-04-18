import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShrugIcon],svg[arcticons-shrug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.45 38.56C6.18 35.38 4.5 30.81 4.5 24s1.68-11.38 5.95-14.56m27.1 29.12c4.27-3.18 6-7.75 6-14.56s-1.68-11.38-6-14.56M21.1 12.47a42 42 0 0 1 3 7m-10.03-5.22a43 43 0 0 1 3 7.05m16.22-8.11c-1.32 5.54-2 14.92-14.54 20.53"></svg:path>`,
})
export class ArcticonsShrugIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
