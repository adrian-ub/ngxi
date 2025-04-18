import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexUserIcon],svg[codex-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M12 10c.714 0 1.239-.434 1.54-.885c.304-.457.46-1.03.46-1.615c0-.584-.156-1.158-.46-1.615C13.238 5.435 12.714 5 12 5s-1.239.434-1.54.885c-.304.457-.46 1.03-.46 1.615c0 .584.156 1.158.46 1.615c.301.45.825.885 1.54.885Z"></svg:path><svg:ellipse cx="12" cy="16" rx="3" ry="5" transform="rotate(-90 12 16)"></svg:ellipse></svg:g>`,
})
export class CodexUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
