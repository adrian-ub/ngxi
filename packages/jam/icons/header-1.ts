import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamHeader1Icon],svg[jam-header-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0zm9.52.779H10V3h3.36v7h-1.84z"></svg:path>`,
})
export class JamHeader1Icon {
  readonly viewBox = input("-5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
