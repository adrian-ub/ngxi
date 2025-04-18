import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailList16FilledIcon],svg[fluent-mail-list-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.912 8H14v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6.337L7.763 9.44a.5.5 0 0 0 .474 0zM8.085 3c.066.186.168.356.297.5A1.5 1.5 0 0 0 8 4.5c0 .384.144.735.382 1a1.5 1.5 0 0 0 .595 2.406L8 8.432l-6-3.23V5a2 2 0 0 1 2-2zM9.5 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentMailList16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
