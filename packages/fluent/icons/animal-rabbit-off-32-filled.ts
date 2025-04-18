import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAnimalRabbitOff32FilledIcon],svg[fluent-animal-rabbit-off-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.576 24.99l4.717 4.717a1 1 0 0 0 1.414-1.414l-26-26a1 1 0 0 0-1.415 1.414l6.711 6.71A5 5 0 1 0 6 19.9v2.101a5 5 0 0 0 5 5h5v-2.5a2.5 2.5 0 0 0-2.5-2.5H12a1 1 0 1 1 0-2h1.5a4.5 4.5 0 0 1 4.5 4.5V27h2.105c1.485 0 2.78-.809 3.47-2.01M30 17a6 6 0 0 1-3.857 5.605L15.538 12h2.061q.204-.398.467-.756l-1.904-2.35a3.002 3.002 0 0 1 4.497-3.971l7.173 7.46A5.99 5.99 0 0 1 30 17"></svg:path>`,
})
export class FluentAnimalRabbitOff32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
