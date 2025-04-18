import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHutIcon],svg[hugeicons-hut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6 12h12l2 10H4z"></svg:path><svg:path d="m9 22l.678-3.3c.154-.748.231-1.122.508-1.342c.576-.46 3.01-.494 3.628 0c.277.22.354.594.508 1.343L15 22M12 3.2L5.544 8.438c-1.827 1.483-2.74 2.224-2.509 2.893S4.437 12 6.776 12h10.448c2.34 0 3.51 0 3.74-.669c.232-.669-.681-1.41-2.508-2.893zm0 0L13.479 2M12 3.2L10.521 2M12 12V9m-4 3v-1.5m8 1.5v-1.5M2 22h20"></svg:path></svg:g>`,
})
export class HugeiconsHutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
