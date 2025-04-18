import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGlobeIcon],svg[hugeicons-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.5 19v3m-2 0h4"></svg:path><svg:circle cx="7" cy="7" r="7" transform="matrix(-1 0 0 1 20.5 2)"></svg:circle><svg:path d="M8.5 4c.654.038.992.359 1.573.973c1.05 1.11 2.1 1.202 2.8.832c1.049-.555.167-1.453 1.399-1.94c.803-.32.915-1.185.468-1.865M20 10c-1.5 0-1.766 1.247-3 1c-2.5-.5-3.208.059-3.208 1.251s0 1.192-.52 2.086c-.338.582-.457 1.163.217 1.663"></svg:path><svg:path d="M6.5 2a9.85 9.85 0 0 0-3 7.083C3.5 14.56 7.977 19 13.5 19a10 10 0 0 0 7-2.835"></svg:path></svg:g>`,
})
export class HugeiconsGlobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
