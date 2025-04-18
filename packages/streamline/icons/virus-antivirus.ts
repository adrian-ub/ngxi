import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineVirusAntivirusIcon],svg[streamline-virus-antivirus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.625 7a6.344 6.344 0 1 0 12.688 0A6.344 6.344 0 1 0 .625 7m6.344-3.875v1.38"></svg:path><svg:path d="M4.479 7a2.489 2.489 0 1 0 4.978 0a2.489 2.489 0 1 0-4.978 0m2.49 3.875v-1.38M10.844 7h-1.38m-6.37 0h1.38m5.235-2.74l-.976.975M4.229 9.74l.975-.975M2.547 2.578l8.86 8.86"></svg:path></svg:g>`,
})
export class StreamlineVirusAntivirusIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
