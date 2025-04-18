import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataBarVerticalArrowDown20RegularIcon],svg[fluent-data-bar-vertical-arrow-down-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3a2 2 0 0 1 2 2v4.6a5.5 5.5 0 0 0-1-.393V5a1 1 0 1 0-2 0v4.022a5.5 5.5 0 0 0-1 .185V5a2 2 0 0 1 2-2m-3 5v1.6a5.5 5.5 0 0 0-1 .657V8a1 1 0 1 0-2 0v7q.001.192.067.36c.089.565.263 1.101.51 1.595A2 2 0 0 1 8 15V8a2 2 0 1 1 4 0m-5 3a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0zm-2-1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m14 4.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4.854 2.353l.003.003a.5.5 0 0 0 .348.144h.006a.5.5 0 0 0 .35-.146l2-2a.5.5 0 0 0-.707-.708L15 15.293V12.5a.5.5 0 0 0-1 0v2.793l-1.146-1.147a.5.5 0 0 0-.708.708z"></svg:path>`,
})
export class FluentDataBarVerticalArrowDown20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
