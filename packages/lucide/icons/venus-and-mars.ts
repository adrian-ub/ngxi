import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideVenusAndMarsIcon],svg[lucide-venus-and-mars-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 20h4m-2-4v6m5-20h4v4m0-4l-5.46 5.46"></svg:path><svg:circle cx="12" cy="11" r="5"></svg:circle></svg:g>`,
})
export class LucideVenusAndMarsIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
