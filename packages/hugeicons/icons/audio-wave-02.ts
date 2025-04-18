import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAudioWave02Icon],svg[hugeicons-audio-wave-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M3.25 14V9.5a1.5 1.5 0 1 1 3 0v7a1.5 1.5 0 0 0 3 0v-12a1.5 1.5 0 1 1 3 0v15a1.5 1.5 0 0 0 3 0v-11a1.5 1.5 0 0 1 3 0v7a1.5 1.5 0 0 0 3 0V12" color="currentColor"></svg:path>`,
})
export class HugeiconsAudioWave02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
