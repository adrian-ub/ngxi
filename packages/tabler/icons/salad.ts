import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSaladIcon],svg[tabler-salad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5-2.517 5.573-4 6.5v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1c-1.687-1.054-4-5-4-6.5V12a1 1 0 0 1 1-1m14.5 0c.351-1.017.426-2.236.5-3.714V6h-2.256c-2.83 0-4.616.804-5.64 2.076"></svg:path><svg:path d="M5.255 11.008A12 12 0 0 1 5 9V8h1.755c.98 0 1.801.124 2.479.35M8 8l1-4l4 2.5"></svg:path><svg:path d="M13 11v-.5a2.5 2.5 0 1 0-5 0v.5"></svg:path></svg:g>`,
})
export class TablerSaladIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
