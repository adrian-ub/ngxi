import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWaveSignalSolidIcon],svg[streamline-wave-signal-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.267 4.792l1.864 6.203a1.5 1.5 0 0 0 1.452 1.074a1.5 1.5 0 0 0 1.345-.948l1.244-3.041H13a1 1 0 1 0 0-2h-2.166a1.51 1.51 0 0 0-1.39.944L8.627 9.02L6.82 3.01a1.48 1.48 0 0 0-1.304-1.065a1.49 1.49 0 0 0-1.471.82L2.387 6.08H1a1 1 0 0 0 0 2h1.701a1.52 1.52 0 0 0 1.333-.823z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineWaveSignalSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
