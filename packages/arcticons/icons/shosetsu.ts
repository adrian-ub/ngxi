import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShosetsuIcon],svg[arcticons-shosetsu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.755 11.5v25m-9.064-19.323h18.128v7.52"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.849 24.697H36.15c0 5.478-1.494 8.566-3.785 8.566h-3.934m2.74-20.418a17.8 17.8 0 0 1 4.88 3.585"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsShosetsuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
