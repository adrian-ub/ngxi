import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[monoIconsMoonIcon],svg[mono-icons-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.36 3.293a1 1 0 0 1 .187 1.157A7.45 7.45 0 0 0 19.55 14.453a1 1 0 0 1 1.343 1.343a9.45 9.45 0 1 1-12.69-12.69a1 1 0 0 1 1.158.187zM6.823 6.67A7.45 7.45 0 0 0 17.33 17.179A9.45 9.45 0 0 1 6.821 6.67z"></svg:path>`,
})
export class MonoIconsMoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
