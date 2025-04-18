import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStarOff24FilledIcon],svg[fluent-star-off-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l4.804 4.805l-3.865.561c-1.107.161-1.55 1.522-.748 2.303l3.815 3.719l-.9 5.251c-.19 1.103.968 1.944 1.958 1.423L12 18.863l4.716 2.48c.99.52 2.148-.32 1.959-1.424l-.038-.22l2.082 2.081a.75.75 0 0 0 1.061-1.06zm18.31 8.73l-3.777 3.68L9.3 6.12l1.489-3.016c.495-1.004 1.926-1.004 2.421 0l2.358 4.777l5.272.766c1.108.161 1.55 1.522.749 2.303"></svg:path>`,
})
export class FluentStarOff24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
