import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLampFillIcon],svg[ph-lamp-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246.68 156.4A8 8 0 0 1 240 160h-32v32a8 8 0 0 1-16 0v-32h-56v48h24a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16h24v-48H16a8 8 0 0 1-7.35-11.15l48-112A8 8 0 0 1 64 32h128a8 8 0 0 1 7.35 4.85l48 112a8 8 0 0 1-.67 7.55"></svg:path>`,
})
export class PhLampFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
