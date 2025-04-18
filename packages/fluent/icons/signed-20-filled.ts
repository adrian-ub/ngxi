import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSigned20FilledIcon],svg[fluent-signed-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M8.461 1.898l.99.389a1.5 1.5 0 0 0 1.098 0l.99-.39a2.418 2.418 0 0 1 3.102 1.285l.424.976a1.5 1.5 0 0 0 .777.776l.975.425a2.418 2.418 0 0 1 1.285 3.102l-.39.99a1.5 1.5 0 0 0 0 1.098l.39.99a2.418 2.418 0 0 1-1.285 3.102l-.975.424a1.5 1.5 0 0 0-.777.777l-.424.975a2.418 2.418 0 0 1-3.102 1.285l-.99-.39a1.5 1.5 0 0 0-1.098 0l-.99.39a2.418 2.418 0 0 1-3.102-1.285l-.425-.975a1.5 1.5 0 0 0-.776-.777l-.976-.424a2.418 2.418 0 0 1-1.284-3.102l.389-.99a1.5 1.5 0 0 0 0-1.098l-.39-.99a2.418 2.418 0 0 1 1.285-3.102l.976-.425a1.5 1.5 0 0 0 .776-.776l.425-.976A2.418 2.418 0 0 1 8.46 1.898zm4.165 5.77L8.98 11.77l-1.625-1.625a.5.5 0 0 0-.708.707l2 2a.5.5 0 0 0 .728-.02l4-4.5a.5.5 0 0 0-.748-.665z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentSigned20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
