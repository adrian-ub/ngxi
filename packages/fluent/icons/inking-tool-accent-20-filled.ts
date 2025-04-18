import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentInkingToolAccent20FilledIcon],svg[fluent-inking-tool-accent-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6V3H3v3a.5.5 0 0 0 .5.5h13A.5.5 0 0 0 17 6m-4.554 1l-2.388 4.776a.5.5 0 1 0 .894.448L13.564 7L13 6.5zM10 17.5c.552 0 1-.672 1-1.5s-.448-1.5-1-1.5s-1 .672-1 1.5s.448 1.5 1 1.5"></svg:path>`,
})
export class FluentInkingToolAccent20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
