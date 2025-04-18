import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphStrolleyArrowDownIcon],svg[si-glyph-strolley-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:g transform="translate(1)"><svg:ellipse cx="4.438" cy="14.459" rx="1.438" ry="1.459"></svg:ellipse><svg:ellipse cx="12.457" cy="14.419" rx="1.457" ry="1.419"></svg:ellipse><svg:path d="M15 10.016H3.953V3.778L1.781.41A.995.995 0 1 0 .174 1.584l1.849 2.901v5.531h-.055c-.553 0-1 .44-1 .984c0 .543.447.984 1 .984H15c.553 0 1-.441 1-.984a.99.99 0 0 0-1-.984"></svg:path></svg:g><svg:path d="m8.198 5.243l2.189 2.581a.795.795 0 0 0 1.143 0l2.188-2.581c.315-.324.364-.899.05-1.223h-1.804V2.045c0-.573-.434-1.037-.968-1.037c-.535 0-.969.464-.969 1.037V4.02H8.246c-.314.325-.363.899-.048 1.223"></svg:path></svg:g>`,
})
export class SiGlyphStrolleyArrowDownIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
