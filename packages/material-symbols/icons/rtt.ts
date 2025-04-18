import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRttIcon],svg[material-symbols-rtt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.125 21l.4-2.55h2.325l2.05-12.9h-2.5l-.725 4.5h-2.65L9.15 3h12.975L21 10.05h-2.65l.7-4.5h-2.5l-2.05 12.9h2.325l-.4 2.55zM3.75 7l.325-2h3.75L7.5 7zm-.625 4l.325-2H7.2l-.325 2zm-1.25 8l.3-2h6.25l-.3 2zm.625-4l.325-2h6.25l-.325 2z"></svg:path>`,
})
export class MaterialSymbolsRttIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
