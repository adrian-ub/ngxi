import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsWNegativeIcon],svg[healthicons-w-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsWNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM10.027 12.329a2 2 0 0 1 3.946-.658l3.076 18.46l5.214-9.123a2 2 0 0 1 3.473 0l5.214 9.124l3.077-18.461a2 2 0 0 1 3.946.658l-4 24a2 2 0 0 1-3.71.663L24 26.031l-6.264 10.961a2 2 0 0 1-3.709-.663z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsWNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsWNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
