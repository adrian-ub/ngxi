import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonAvailable24FilledIcon],svg[fluent-person-available-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m-5.477 2A6.47 6.47 0 0 0 11 17.5c0 1.63.6 3.12 1.592 4.262q-1.193.24-2.592.24c-3.42 0-5.944-1.073-7.486-3.237a2.75 2.75 0 0 1-.51-1.596v-.92A2.25 2.25 0 0 1 4.253 14zm2.83 3.147a.5.5 0 1 0-.706.707l2 2a.5.5 0 0 0 .707 0l4-4a.5.5 0 1 0-.707-.707L16.5 18.793zM10 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10"></svg:path>`,
})
export class FluentPersonAvailable24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
