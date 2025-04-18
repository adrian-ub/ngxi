import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonPause2SolidIcon],svg[streamline-button-pause-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0H4a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 4 14H1.5A1.5 1.5 0 0 1 0 12.5zM10 0a1.5 1.5 0 0 0-1.5 1.5v11A1.5 1.5 0 0 0 10 14h2.5a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 12.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineButtonPause2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
