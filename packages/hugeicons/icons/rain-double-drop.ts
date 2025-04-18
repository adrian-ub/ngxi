import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRainDoubleDropIcon],svg[hugeicons-rain-double-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 13.342c0-3.347 2.738-6.655 4.66-8.564c1.044-1.037 2.636-1.037 3.68 0C12.262 6.688 15 9.995 15 13.342C15 16.624 12.539 20 8.5 20S2 16.624 2 13.342"></svg:path><svg:path d="M15.5 20c4.038 0 6.5-3.376 6.5-6.658c0-3.347-2.738-6.655-4.66-8.564c-1.044-1.037-2.636-1.037-3.68 0"></svg:path></svg:g>`,
})
export class HugeiconsRainDoubleDropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
