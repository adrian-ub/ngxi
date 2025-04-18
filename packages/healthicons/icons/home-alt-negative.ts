import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHomeAltNegativeIcon],svg[healthicons-home-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsHomeAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm20 31v8a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V23.925l-3.294 3.283a1 1 0 0 1-1.412-1.416l17.056-17l.708-.706l.706.708l16.944 17a1 1 0 0 1-1.416 1.412L37 23.903V39a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-8a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsHomeAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsHomeAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
