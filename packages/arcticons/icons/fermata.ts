import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFermataIcon],svg[arcticons-fermata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.45 38.432V9.566m5.894-3.4l24.994 14.431m0 6.807l-24.994 14.43M7.45 9.566c0-3.4 2.952-5.098 5.894-3.4M7.45 38.432c0 3.398 2.95 5.101 5.894 3.402m24.994-14.43c2.95-1.703 2.95-5.103 0-6.806"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="20.966" cy="26.952" r="2.615"></svg:circle><svg:path d="M29.418 25.643c0-9.802-17-9.807-17 0c5.611-5.485 11.433-5.567 17 0"></svg:path></svg:g>`,
})
export class ArcticonsFermataIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
