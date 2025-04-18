import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWaveformSlashFillIcon],svg[ph-waveform-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-32 56a8 8 0 0 1 16 0v50.75a8 8 0 0 1-16 0Zm-32 8a8 8 0 0 1 16 0v10.75a8 8 0 0 1-16 0Zm-80 48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0Zm125.66 45.66a8 8 0 0 1-11.32 0L136 147.31V168a8 8 0 0 1-16 0v-36.69l-16-16V184a8 8 0 0 1-16 0V99.32L58.34 69.66a8 8 0 0 1 11.32-11.32l128 128a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhWaveformSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
