import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineVolumeOffIcon],svg[streamline-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 13.5L.5.5m9.018 11.482a.97.97 0 0 1-.608-.172L5 9H3.5c-.545 0-1-.455-1-1V6c0-.256.1-.492.264-.67M5 5l4-2.81a.954.954 0 0 1 1.5.81v7.492"></svg:path>`,
})
export class StreamlineVolumeOffIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
