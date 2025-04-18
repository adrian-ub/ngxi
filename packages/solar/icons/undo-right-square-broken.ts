import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUndoRightSquareBrokenIcon],svg[solar-undo-right-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M17.5 9.5H9.962c-1.368 0-2.052 0-2.548.32a2 2 0 0 0-.594.594c-.32.496-.32 1.18-.32 2.548s0 2.052.32 2.547a2 2 0 0 0 .594.594c.496.32 1.18.32 2.548.32H14.5m3-6.923l-2.25-2.077M17.5 9.5l-2.25 2.077"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarUndoRightSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
