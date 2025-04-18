import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerShieldXIcon],svg[tabler-shield-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.252 20.601q-.613.233-1.252.399A12 12 0 0 1 3.5 6A12 12 0 0 0 12 3a12 12 0 0 0 8.5 3a12 12 0 0 1-.19 7.357M22 22l-5-5m0 5l5-5"></svg:path>`,
})
export class TablerShieldXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
