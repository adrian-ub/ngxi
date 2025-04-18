import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatBriefcaseIcon],svg[fluent-emoji-flat-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#8C5543" d="M2 15h28v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></svg:path><svg:path fill="#6D4534" d="M11.1 9H4a2 2 0 0 0-2 2v4a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4v-4a2 2 0 0 0-2-2h-7.1a5.002 5.002 0 0 0-9.8 0m2.07 0a3.001 3.001 0 0 1 5.66 0z"></svg:path><svg:path fill="#D3883E" d="m13 19l3-1l3 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"></svg:path><svg:path fill="#E19747" d="M13 18a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h-6z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatBriefcaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
