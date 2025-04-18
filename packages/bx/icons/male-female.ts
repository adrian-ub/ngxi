import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxMaleFemaleIcon],svg[bx-male-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="6" cy="4" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M9 7H3a1 1 0 0 0-1 1v7h2v7h4v-7h2V8a1 1 0 0 0-1-1"></svg:path><svg:circle cx="17" cy="4" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M20.21 7.73a1 1 0 0 0-1-.73h-4.5a1 1 0 0 0-1 .73L12 14h2l-1 4h2v4h4v-4h2l-1-4h2z"></svg:path>`,
})
export class BxMaleFemaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
