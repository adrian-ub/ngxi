import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAudioWave01Icon],svg[hugeicons-audio-wave-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.25 21.75c-.41 0-.75-.34-.75-.75V3c0-.41.34-.75.75-.75s.75.34.75.75v18c0 .41-.34.75-.75.75m-3-4c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75S7 6.59 7 7v10c0 .41-.34.75-.75.75m5.25.25c0 .41.34.75.75.75s.75-.34.75-.75V6c0-.41-.34-.75-.75-.75s-.75.34-.75.75zm3.75-2.25c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v6c0 .41-.34.75-.75.75M17.5 17c0 .41.34.75.75.75s.75-.34.75-.75V7c0-.41-.34-.75-.75-.75s-.75.34-.75.75zm3.75-3.25c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75M2.5 13c0 .41.34.75.75.75S4 13.41 4 13v-2c0-.41-.34-.75-.75-.75s-.75.34-.75.75z" color="currentColor"></svg:path>`,
})
export class HugeiconsAudioWave01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
