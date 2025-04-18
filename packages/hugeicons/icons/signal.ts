import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSignalIcon],svg[hugeicons-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.036 21.929c5.503 0 9.964-4.462 9.964-9.965S17.539 2 12.036 2S2.07 6.461 2.07 11.964c0 1.815-.35 3.517.499 4.982L2.07 21.93l4.983-.499c1.465.848 3.167.499 4.982.499"></svg:path><svg:path d="M12 19a7 7 0 1 0-7-7c0 1.275.404 2.47 1 3.5L5 19l3.5-1c1.03.596 2.225 1 3.5 1"></svg:path></svg:g>`,
})
export class HugeiconsSignalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
