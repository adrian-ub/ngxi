import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsClipboardCheckIcon],svg[pepicons-clipboard-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.675 2.5a1 1 0 0 1 1-1h6.643a1 1 0 0 1 1 1v3.875a1 1 0 0 1-1 1H6.675a1 1 0 0 1-1-1V2.5Zm2 1v1.875h4.643V3.5H7.675Z" clip-rule="evenodd"></svg:path><svg:path d="M16.086 18H3.907A1.107 1.107 0 0 1 2.8 16.893V3.607c0-.611.496-1.107 1.107-1.107H7.23v2.214H5.014v11.072h9.965V4.714h-2.215V2.5h3.322c.611 0 1.107.496 1.107 1.107v13.286c0 .611-.496 1.107-1.107 1.107Z"></svg:path><svg:path fill-rule="evenodd" d="M12.567 8.677a1 1 0 0 1 .256 1.39l-1.767 2.565a1.5 1.5 0 0 1-2.154.334L7.387 11.79a1 1 0 1 1 1.226-1.58l1.097.851l1.466-2.128a1 1 0 0 1 1.391-.256Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsClipboardCheckIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
