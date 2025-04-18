import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatSpeakerLowVolumeIcon],svg[fluent-emoji-flat-speaker-low-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#B4ACBC" d="M8.012 23h-4.21C2.808 23 2 22.153 2 21.108V10.892C2 9.847 2.807 9 3.803 9h4.21L19 13a3 3 0 1 1 0 6z"></svg:path><svg:path fill="#CDC4D6" d="m16.61 26.83l-8.612-3.829V9.02l8.05-3.787c1.122-.529 2.988.023 2.988 1.265v18.808a1.693 1.693 0 0 1-2.425 1.526"></svg:path></svg:g>`,
})
export class FluentEmojiFlatSpeakerLowVolumeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
