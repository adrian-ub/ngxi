import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHonorAiSpaceIcon],svg[arcticons-honor-ai-space-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="14.5" ry="19.5"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 24c0-5.385 3.246-9.75 7.25-9.75S24 18.615 24 24h0c0 4.982-2.793 9.163-6.477 9.694"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 24c0 8.077-5.373 14.625-12 14.625s-12-6.548-12-14.625c0-3.563 1.067-7.003 3.001-9.675M9.5 24h5m9.5 0h14.5"></svg:path>`,
})
export class ArcticonsHonorAiSpaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
