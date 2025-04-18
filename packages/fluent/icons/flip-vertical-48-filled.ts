import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlipVertical48FilledIcon],svg[fluent-flip-vertical-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.312 4.239A1.5 1.5 0 0 1 40 5.5v15a1.5 1.5 0 0 1-1.5 1.5h-33a1.5 1.5 0 0 1-.62-2.866l33-15a1.5 1.5 0 0 1 1.432.105M12.425 19H37V7.83zM40 43a1 1 0 0 1-1.425.905l-34-16A1 1 0 0 1 5 26h34a1 1 0 0 1 1 1z"></svg:path>`,
})
export class FluentFlipVertical48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
