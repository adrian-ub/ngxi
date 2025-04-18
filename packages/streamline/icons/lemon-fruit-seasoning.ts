import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLemonFruitSeasoningIcon],svg[streamline-lemon-fruit-seasoning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M10.976 10.975c1.843-1.843 2.064-4.198 1.51-6.036c-.1-.334-.049-.694.115-1.002c.441-.826.453-1.683-.2-2.336c-.654-.654-1.511-.642-2.338-.2a1.33 1.33 0 0 1-1.002.116c-1.837-.553-4.19-.331-6.033 1.511C1.187 4.87.964 7.222 1.516 9.06c.1.334.048.694-.116 1.001c-.442.828-.455 1.685.2 2.339c.653.653 1.509.642 2.335.201a1.33 1.33 0 0 1 1.002-.115c1.838.555 4.194.335 6.038-1.51Z"></svg:path><svg:path stroke-linecap="round" d="M8.35 3.408c-1.203-.362-2.745-.217-3.952.99a3.87 3.87 0 0 0-1.12 2.177"></svg:path></svg:g>`,
})
export class StreamlineLemonFruitSeasoningIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
