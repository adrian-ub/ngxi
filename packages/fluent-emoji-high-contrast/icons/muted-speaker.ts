import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastMutedSpeakerIcon],svg[fluent-emoji-high-contrast-muted-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.036 20.718l5.933 5.934a1.189 1.189 0 1 0 1.682-1.683L6.83 5.15a1.19 1.19 0 0 0-1.68 1.683L7.318 9H3.803C2.807 9 2 9.847 2 10.892v10.216C2 22.153 2.807 23 3.803 23l4.195.001l8.613 3.83a1.693 1.693 0 0 0 2.425-1.526zm-2-2v6.113l-7.038-3.13V11.68zM22 16.023c0 .504-.122.979-.337 1.397l-4.627-4.627v-5.76l-.03-.001a.4.4 0 0 0-.113.013h-.002l-3.81 1.793l-1.504-1.503l4.47-2.103c1.123-.529 2.989.023 2.989 1.265v6.473A3.055 3.055 0 0 1 22 16.023"></svg:path>`,
})
export class FluentEmojiHighContrastMutedSpeakerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
