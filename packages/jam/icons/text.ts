import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamTextIcon],svg[jam-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1v2a1 1 0 0 1-2 0V2H7v8h1a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h1V2H2v1a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1"></svg:path>`,
})
export class JamTextIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
