import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorLine16FilledIcon],svg[fluent-color-line-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.727 12.07a1.75 1.75 0 0 0 1.236.118l2.4-.656a3.16 3.16 0 0 0 1.4-.816L8.479 10H13.5a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5v-2a1.5 1.5 0 0 1 .78-1.316a1.75 1.75 0 0 0 .947 1.885M11.082 1a1.9 1.9 0 0 0-1.356.562L4.168 7.12a1.9 1.9 0 0 0-.494.849l-.656 2.4a.5.5 0 0 0 .614.613l2.4-.656a1.9 1.9 0 0 0 .849-.494l5.558-5.558A1.919 1.919 0 0 0 11.082 1"></svg:path>`,
})
export class FluentColorLine16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
