import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiDownpointingredtriangleIcon],svg[fxemoji-downpointingredtriangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF473E" d="M402.077 165.494L269.825 364.849c-6.562 9.892-21.088 9.892-27.65 0L109.923 165.494c-7.316-11.028.591-25.762 13.825-25.762h264.504c13.234-.001 21.141 14.734 13.825 25.762"></svg:path>`,
})
export class FxemojiDownpointingredtriangleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
