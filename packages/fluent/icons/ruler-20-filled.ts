import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRuler20FilledIcon],svg[fluent-ruler-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.97 3.198q.03.146.03.302v13a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 6 16.5v-13A1.5 1.5 0 0 1 7.5 2h5a1.5 1.5 0 0 1 1.47 1.198M7 14.5v1h1.5a.5.5 0 0 0 0-1zm0-10v1h1.5a.5.5 0 0 0 0-1zM7 7v1h2.5a.5.5 0 0 0 0-1zm0 2.5v1h1.5a.5.5 0 0 0 0-1zm0 2.504v1h2.5a.5.5 0 1 0 0-1z"></svg:path>`,
})
export class FluentRuler20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
