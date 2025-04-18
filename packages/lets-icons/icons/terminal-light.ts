import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTerminalLightIcon],svg[lets-icons-terminal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.5 10.7c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C6.02 7.5 6.58 7.5 7.7 7.5h8.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.428.218.988.218 2.108v3.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218H7.7c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C4.5 15.98 4.5 15.42 4.5 14.3z"></svg:path>`,
})
export class LetsIconsTerminalLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
