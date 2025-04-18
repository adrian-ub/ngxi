import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBugAntivirusDebuggingIcon],svg[streamline-bug-antivirus-debugging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m3.5 10.5l1.3-1.3M4.5 7H3m7.5-3.5L9.2 4.8M9.5 7H11m-4.5-.5h3M.5 7a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0m11.096 4.596L2.404 2.404"></svg:path><svg:path d="M4.804 4.804A2.5 2.5 0 0 1 9.5 6v2a2.5 2.5 0 0 1-.304 1.196M4.5 7v1a2.5 2.5 0 0 0 3.172 2.408"></svg:path></svg:g>`,
})
export class StreamlineBugAntivirusDebuggingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
