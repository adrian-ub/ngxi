import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextUnderline24FilledIcon],svg[fluent-text-underline-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4.5a1 1 0 0 1 2 0v6.001c-.003 3.463 1.32 4.999 4.247 4.999c2.928 0 4.253-1.537 4.253-5v-6a1 1 0 1 1 2 0v6c0 4.54-2.18 7-6.253 7S5.996 15.039 6 10.5zM7 21a1 1 0 1 1 0-2h10.5a1 1 0 1 1 0 2z"></svg:path>`,
})
export class FluentTextUnderline24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
