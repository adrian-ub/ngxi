import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsEntryIcon],svg[healthicons-entry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 5.387a1 1 0 0 1 1.316-.948l13 4.333a1 1 0 0 1 .684.949v28.558a1 1 0 0 1-.684.949l-13 4.333A1 1 0 0 1 21 42.613V39h-9V8h9zM27 23c0 1.105-.448 2-1 2s-1-.895-1-2s.448-2 1-2s1 .895 1 2m-6-13h-7v27h7z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsEntryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
