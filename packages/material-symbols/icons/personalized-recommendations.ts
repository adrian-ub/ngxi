import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPersonalizedRecommendationsIcon],svg[material-symbols-personalized-recommendations-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.975 22.9q-.275 0-.55-.112q-.275-.113-.5-.338l-9.375-9.4q-.225-.225-.325-.5t-.1-.55q0-.275.1-.55t.325-.5l9.375-9.4q.225-.225.5-.338q.275-.112.55-.112t.563.112q.287.113.512.338l9.4 9.4q.225.225.325.5t.1.55q0 .275-.1.55t-.325.5l-9.4 9.4q-.225.225-.512.338q-.288.112-.563.112ZM12 18l1.85-4.15L18 12l-4.15-1.85L12 6l-1.85 4.15L6 12l4.15 1.825Z"></svg:path>`,
})
export class MaterialSymbolsPersonalizedRecommendationsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
