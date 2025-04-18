import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHomeMaxDotsIcon],svg[material-symbols-light-home-max-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18.77V18H5.5q-1.458 0-2.479-1.021T2 14.5v-5q0-1.458 1.021-2.479T5.5 6h13q1.458 0 2.479 1.021T22 9.5v5q0 1.458-1.021 2.479T18.5 18H16v.77zm2.5-6q.31 0 .54-.221q.23-.22.23-.549q0-.31-.23-.54t-.54-.23q-.329 0-.549.23t-.22.54q0 .329.22.549t.549.22m-3 0q.31 0 .54-.22T8.27 12q0-.31-.23-.54t-.54-.23q-.329 0-.549.23t-.22.54q0 .329.22.549t.549.22m6 0q.31 0 .54-.22t.23-.549q0-.31-.23-.54t-.54-.23q-.329 0-.549.23t-.22.54q0 .329.22.549t.549.22m3 0q.31 0 .54-.22t.23-.549q0-.31-.23-.54t-.54-.23q-.329 0-.549.23t-.22.54q0 .329.22.549t.549.22"></svg:path>`,
})
export class MaterialSymbolsLightHomeMaxDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
