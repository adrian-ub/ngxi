import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentInkingToolAccent32FilledIcon],svg[fluent-inking-tool-accent-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h26v4a1 1 0 0 1-1 1h-5c0 .15-.034.303-.106.447l-5 10a1 1 0 1 1-1.788-.894L20.882 9H4a1 1 0 0 1-1-1zm14.857 21.875c0 1.864-.863 3.375-1.928 3.375S14 27.739 14 25.875s.864-3.375 1.929-3.375s1.928 1.511 1.928 3.375"></svg:path>`,
})
export class FluentInkingToolAccent32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
