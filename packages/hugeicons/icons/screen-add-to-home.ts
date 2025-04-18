import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScreenAddToHomeIcon],svg[hugeicons-screen-add-to-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.069 5c.136-.869.393-1.491.879-1.975C8.979 2 10.638 2 13.958 2s4.979 0 6.01 1.025S20.999 5.7 20.999 9v6c0 3.3 0 4.95-1.031 5.975S17.278 22 13.958 22s-4.979 0-6.01-1.025c-.655-.652-.894-1.556-.981-2.975M14 19h.009"></svg:path><svg:path d="M6.443 7.952h3.48c.436.015 1.095.546 1.095.957v3.605m-8.019 3.438l7.268-7.203"></svg:path></svg:g>`,
})
export class HugeiconsScreenAddToHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
