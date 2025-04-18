import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsNpmIcon],svg[proicons-npm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="16.5" height="16.5" x="3.75" y="3.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" rx="2"></svg:rect><svg:path fill="currentColor" d="M12 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v11.25h-4z"></svg:path></svg:g>`,
})
export class ProiconsNpmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
