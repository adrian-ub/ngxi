import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarDialogLinearIcon],svg[solar-dialog-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-width="1.5" d="M10 22a8 8 0 1 0-7.22-4.55c.172.36.232.766.13 1.15l-.328 1.227a1.3 1.3 0 0 0 1.591 1.592L5.4 21.09a1.67 1.67 0 0 1 1.15.13c1.045.5 2.215.78 3.451.78Z"></svg:path><svg:path stroke-width="1.5" d="m18 14.502l.198-.087c.362-.165.768-.227 1.153-.124l.476.127a1.3 1.3 0 0 0 1.592-1.591l-.128-.476c-.103-.385-.04-.791.125-1.153A6.5 6.5 0 1 0 9.5 5.996"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.518 14h.01m3.481 0h.009m3.482 0h.009"></svg:path></svg:g>`,
})
export class SolarDialogLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
