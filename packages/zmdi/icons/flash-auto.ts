import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFlashAutoIcon],svg[zmdi-flash-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h213l-85 192h85L64 451V259H0zm341 0l69 192h-41l-15-43h-68l-15 43h-41L299 3zm-46 120h50l-25-78z"></svg:path>`,
})
export class ZmdiFlashAutoIcon {
  readonly viewBox = input("0 0 416 456")
  readonly width = input("0.92em")
  readonly height = input("1em")
}
