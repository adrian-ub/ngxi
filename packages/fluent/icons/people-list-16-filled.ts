import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPeopleList16FilledIcon],svg[fluent-people-list-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M11.5 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4M8 9.5q.001-.263.085-.498L8 9H3a1.5 1.5 0 0 0-1.5 1.5v.075s0 2.925 4 2.925c1.21 0 2.055-.268 2.644-.642q.093-.196.238-.358a1.5 1.5 0 0 1-.382-1c0-.384.144-.735.382-1A1.5 1.5 0 0 1 8 9.5M9.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentPeopleList16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
