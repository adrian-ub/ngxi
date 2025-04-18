import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAnimalRabbit32FilledIcon],svg[fluent-animal-rabbit-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.337 4.917a3 3 0 0 1 4.322.006l7.173 7.46A6 6 0 0 1 24.105 23a4 4 0 0 1-4 4H18v-2.5a4.5 4.5 0 0 0-4.5-4.5H12a1 1 0 1 0 0 2h1.5a2.5 2.5 0 0 1 2.5 2.5V27h-5a5 5 0 0 1-5-5v-2.1A5.002 5.002 0 0 1 7 10a4.99 4.99 0 0 1 4 2h6.6q.203-.398.466-.756l-1.904-2.35a3 3 0 0 1 .175-3.977"></svg:path>`,
})
export class FluentAnimalRabbit32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
