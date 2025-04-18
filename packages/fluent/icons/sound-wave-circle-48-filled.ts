import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSoundWaveCircle48FilledIcon],svg[fluent-sound-wave-circle-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-23.25-8c-.69 0-1.25.56-1.25 1.25v13.5a1.25 1.25 0 1 0 2.5 0v-13.5c0-.69-.56-1.25-1.25-1.25M34 17.25a1.25 1.25 0 1 0-2.5 0v13.5a1.25 1.25 0 1 0 2.5 0zM14.75 20c-.69 0-1.25.56-1.25 1.25v5.5a1.25 1.25 0 1 0 2.5 0v-5.5c0-.69-.56-1.25-1.25-1.25m13.25.25a1.25 1.25 0 1 0-2.5 0v7.5a1.25 1.25 0 1 0 2.5 0z"></svg:path>`,
})
export class FluentSoundWaveCircle48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
