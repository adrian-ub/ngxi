import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopClipboardCheckIcon],svg[pepicons-pop-clipboard-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.675 2.5a1 1 0 0 1 1-1h6.643a1 1 0 0 1 1 1v3.875a1 1 0 0 1-1 1H6.675a1 1 0 0 1-1-1zm2 1v1.875h4.643V3.5z" clip-rule="evenodd"></svg:path><svg:path d="M5 5v11h10V5h-1V3h2a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2v2z"></svg:path><svg:path fill-rule="evenodd" d="M12.567 8.677a1 1 0 0 1 .256 1.39l-1.767 2.565a1.5 1.5 0 0 1-2.154.334L7.387 11.79a1 1 0 0 1 1.226-1.58l1.097.851l1.467-2.128a1 1 0 0 1 1.39-.256" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopClipboardCheckIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
