import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCouch20RegularIcon],svg[fluent-couch-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4a2 2 0 0 0-2 2v1.05A2.5 2.5 0 0 0 2 9.5V12a2 2 0 0 0 2 2v1.5a.5.5 0 0 0 1 0V14h10v1.5a.5.5 0 0 0 1 0V14a2 2 0 0 0 2-2V9.5a2.5 2.5 0 0 0-2-2.45V6a2 2 0 0 0-2-2zm9 3.05c-.98.199-1.751.97-1.95 1.95h-6.1A2.5 2.5 0 0 0 5 7.05V6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zM16 13H4a1 1 0 0 1-1-1V9.5a1.5 1.5 0 1 1 3 0a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5a1.5 1.5 0 0 1 3 0V12a1 1 0 0 1-1 1"></svg:path>`,
})
export class FluentCouch20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
