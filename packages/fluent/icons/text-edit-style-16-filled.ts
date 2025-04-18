import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextEditStyle16FilledIcon],svg[fluent-text-edit-style-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.471 2.332a.5.5 0 0 0-.942 0l-2.5 7a.5.5 0 1 0 .942.336L3.924 7h2.152l.475 1.328l.782-.782zm-.47 1.655L5.718 6H4.281zm5.73 1.575a1.914 1.914 0 1 1 2.708 2.707l-4.657 4.657a2.5 2.5 0 0 1-1.278.683l-1.906.382a.5.5 0 0 1-.588-.589l.381-1.906a2.5 2.5 0 0 1 .684-1.277z"></svg:path>`,
})
export class FluentTextEditStyle16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
