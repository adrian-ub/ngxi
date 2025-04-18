import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCaretLeftFilledIcon],svg[tabler-caret-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.883 5.007l.058-.005h.118l.058.005l.06.009l.052.01l.108.032l.067.027l.132.07l.09.065l.081.073l.083.094l.054.077l.054.096l.017.036l.027.067l.032.108l.01.053l.01.06l.004.057L15 6v12c0 .852-.986 1.297-1.623.783l-.084-.076l-6-6a1 1 0 0 1-.083-1.32l.083-.094l6-6l.094-.083l.077-.054l.096-.054l.036-.017l.067-.027l.108-.032l.053-.01l.06-.01z"></svg:path>`,
})
export class TablerCaretLeftFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
