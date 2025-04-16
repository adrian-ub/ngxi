import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCrosshairIcon],svg[lucide-crosshair-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M22 12h-4M6 12H2m10-6V2m0 20v-4"></svg:path></svg:g>`,
})
export class LucideCrosshairIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
