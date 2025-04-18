import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBayamIcon],svg[arcticons-bayam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 14.75a9.25 9.25 0 0 0-9.25-9.25H9.5a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h23.75a9.25 9.25 0 0 0 9.25-9.25h0A9.25 9.25 0 0 0 33.25 24a9.25 9.25 0 0 0 9.25-9.25"></svg:path><svg:ellipse cx="15.314" cy="18.87" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.407" ry="3.821"></svg:ellipse><svg:ellipse cx="27.539" cy="14.646" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.407" ry="3.821"></svg:ellipse>`,
})
export class ArcticonsBayamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
