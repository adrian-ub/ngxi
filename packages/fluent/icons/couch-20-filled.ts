import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCouch20FilledIcon],svg[fluent-couch-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4H6a2 2 0 0 0-2 2v1a3 3 0 0 1 2.829 2h6.342A3 3 0 0 1 16 7V6a2 2 0 0 0-2-2m2 4a2 2 0 0 0-1.938 1.505c-.068.268-.286.495-.562.495h-7c-.276 0-.494-.227-.562-.495A2 2 0 0 0 2 10v2a2 2 0 0 0 2 2v1.5a.5.5 0 0 0 1 0V14h10v1.5a.5.5 0 0 0 1 0V14a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class FluentCouch20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
