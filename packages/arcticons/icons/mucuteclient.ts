import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMucuteclientIcon],svg[arcticons-mucuteclient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.749 44.714a21.5 21.5 0 0 1 .029-41.436M14.225 27.04L35.453 5.812m-17.868 30.03l24.083-24.083M23.666 41.923L45.189 20.4"></svg:path>`,
})
export class ArcticonsMucuteclientIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
