import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCinemanaIcon],svg[arcticons-cinemana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.042 39.5l9.333-10.334h-23.25a5.167 5.167 0 0 1 0-10.333h13.917L43.375 8.5h-23.25A15.498 15.498 0 0 0 6.702 31.75a15.5 15.5 0 0 0 13.423 7.75zm-6.167 0L16.15 27.3m-.716-5.466L8.648 34.417"></svg:path>`,
})
export class ArcticonsCinemanaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
