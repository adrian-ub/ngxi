import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFoldingStoolIcon],svg[pepicons-pop-folding-stool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3.5 11A1.5 1.5 0 0 1 5 9.5h10a1.5 1.5 0 0 1 0 3H5A1.5 1.5 0 0 1 3.5 11M6 1a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1"></svg:path><svg:path d="M6 6a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1"></svg:path><svg:path d="M14 1a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m1.825 17.565a1 1 0 0 1-1.39.26l-9.5-6.5a1 1 0 0 1 1.13-1.65l9.5 6.5a1 1 0 0 1 .26 1.39"></svg:path><svg:path d="M4.175 18.565a1 1 0 0 0 1.39.26l9.5-6.5a1 1 0 1 0-1.13-1.65l-9.5 6.5a1 1 0 0 0-.26 1.39M14 4H6V2h8zm0 3H6V5h8zM2 8a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1m12 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class PepiconsPopFoldingStoolIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
