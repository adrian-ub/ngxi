import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirHandBrakeIcon],svg[iconoir-hand-brake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 16v-4m0-3V8"></svg:path><svg:circle cx="12" cy="12" r="8"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3.953 4.5A10.96 10.96 0 0 0 1 12c0 2.899 1.121 5.535 2.953 7.5m16.094-15A10.96 10.96 0 0 1 23 12c0 2.899-1.121 5.535-2.953 7.5"></svg:path></svg:g>`,
})
export class IconoirHandBrakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
