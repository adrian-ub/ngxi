import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeSanitizerOutlineIcon],svg[healthicons-ppe-sanitizer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M25 29h5v2h-5v5h-2v-5h-5v-2h5v-5h2z"></svg:path><svg:path fill-rule="evenodd" d="M13.927 9.048a8.8 8.8 0 0 0-1.559 1.948l-1.736-.992a10.7 10.7 0 0 1 1.94-2.427C13.43 6.787 14.625 6 16 6h17v2h-8v6h4a2 2 0 0 1 2 2v2h1a6 6 0 0 1 6 6v15a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V24a6 6 0 0 1 6-6h1v-2a2 2 0 0 1 2-2h4V8h-7c-.624 0-1.346.38-2.073 1.048M12 24a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v15a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1zm17-8v2H19v-2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPpeSanitizerOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
