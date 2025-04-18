import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMathAiIcon],svg[arcticons-math-ai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 20c0 2.216-1.784 4-4 4H28c-2.216 0-4 1.784-4 4v10.5c0 2.216-1.784 4-4 4"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:circle cx="37.473" cy="29.5" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.473 31.95v5.3m-4.224-2.65h-3.544m-.878 2.65l2.65-8l2.65 8"></svg:path><svg:circle cx="14.75" cy="37.888" r=".75" fill="currentColor"></svg:circle><svg:circle cx="14.75" cy="28.612" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10 33.25h9.5m10.05-22.2l7.4 7.4m0-7.4l-7.4 7.4m-18.675-3.7h7.75m-3.875-3.875v7.75"></svg:path>`,
})
export class ArcticonsMathAiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
