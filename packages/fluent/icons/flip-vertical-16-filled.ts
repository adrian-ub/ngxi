import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlipVertical16FilledIcon],svg[fluent-flip-vertical-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.651 1.116a.75.75 0 0 1 .35.634v4.5a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1-.322-1.428l9.5-4.5a.75.75 0 0 1 .722.044M6.085 5.5H11.5V2.935zm6.915 9a.5.5 0 0 1-.724.447l-10-5A.5.5 0 0 1 2.5 9h10a.5.5 0 0 1 .5.5z"></svg:path>`,
})
export class FluentFlipVertical16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
