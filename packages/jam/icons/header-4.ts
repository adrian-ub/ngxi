import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamHeader4Icon],svg[jam-header-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0zm10.636 4.74H10V7.302l.06-.198l2.714-4.11h1.687v3.952h.538V8.74h-.538V10h-1.825zm.154-1.283V5.774l-1.1 1.683z"></svg:path>`,
})
export class JamHeader4Icon {
  readonly viewBox = input("-4.5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
