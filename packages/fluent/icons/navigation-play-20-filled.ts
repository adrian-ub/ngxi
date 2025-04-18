import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNavigationPlay20FilledIcon],svg[fluent-navigation-play-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5zM2 10.75a.75.75 0 0 1 .75-.75h9.587a5.5 5.5 0 0 0-1.447 1.5H2.75a.75.75 0 0 1-.75-.75M2.75 15h7.272a5.5 5.5 0 0 0 .353 1.5H2.75a.75.75 0 0 1 0-1.5M20 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.287-.437l-2.97-1.65a.5.5 0 0 0-.743.437v3.3a.5.5 0 0 0 .743.437l2.97-1.65a.5.5 0 0 0 0-.874"></svg:path>`,
})
export class FluentNavigationPlay20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
