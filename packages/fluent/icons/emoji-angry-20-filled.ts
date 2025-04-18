import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiAngry20FilledIcon],svg[fluent-emoji-angry-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0m6.5-1.5a.5.5 0 0 0 .26-.929l-2.503-1.5a.5.5 0 0 0-.514.858l1.217.73A1 1 0 1 0 8.5 8.5m5 0a1 1 0 0 0-.459-.841l1.216-.73a.5.5 0 0 0-.514-.858l-2.499 1.5a.5.5 0 0 0 .256.929a1 1 0 1 0 2 0m.062 4.89c.34-.308.067-.716.055-.73l-.048-.054a3 3 0 0 0-.174-.171a4 4 0 0 0-.672-.49c-.6-.354-1.5-.695-2.721-.695s-2.121.34-2.722.694c-.3.176-.522.353-.674.49a3 3 0 0 0-.223.225c-.183.219-.178.545.054.73a.5.5 0 0 0 .7-.073l.003-.003l.023-.026a2 2 0 0 1 .115-.112a3 3 0 0 1 .508-.369c.463-.272 1.19-.556 2.216-.556s1.752.284 2.213.556c.233.137.4.272.507.369a2 2 0 0 1 .137.137l.003.003c.173.213.497.26.7.075"></svg:path>`,
})
export class FluentEmojiAngry20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
