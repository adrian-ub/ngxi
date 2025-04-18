import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentInkingToolAccent16FilledIcon],svg[fluent-inking-tool-accent-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 2v2a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V2zm-4 2.5l.52.476l-2.398 4.75a.5.5 0 1 1-.893-.451l2.17-4.3zM9 13c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5"></svg:path>`,
})
export class FluentInkingToolAccent16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
