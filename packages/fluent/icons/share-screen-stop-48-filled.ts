import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShareScreenStop48FilledIcon],svg[fluent-share-screen-stop-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 8A4.75 4.75 0 0 0 4 12.75v22.5A4.75 4.75 0 0 0 8.75 40h30.5A4.75 4.75 0 0 0 44 35.25v-22.5A4.75 4.75 0 0 0 39.25 8zm13.482 16l-5.866-5.866a1.25 1.25 0 0 1 1.768-1.768L24 22.232l5.866-5.866a1.25 1.25 0 0 1 1.768 1.768L25.768 24l5.866 5.866a1.25 1.25 0 0 1-1.768 1.768L24 25.768l-5.866 5.866a1.25 1.25 0 0 1-1.768-1.768z"></svg:path>`,
})
export class FluentShareScreenStop48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
