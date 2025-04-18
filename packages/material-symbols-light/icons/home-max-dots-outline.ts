import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHomeMaxDotsOutlineIcon],svg[material-symbols-light-home-max-dots-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 17h13q1.037 0 1.768-.732T21 14.5v-5q0-1.036-.732-1.768T18.5 7h-13q-1.036 0-1.768.732T3 9.5v5q0 1.037.732 1.768T5.5 17M8 18.77V18H5.5q-1.458 0-2.479-1.021T2 14.5v-5q0-1.458 1.021-2.479T5.5 6h13q1.458 0 2.479 1.021T22 9.5v5q0 1.458-1.021 2.479T18.5 18H16v.77zm2.5-6q.31 0 .54-.221q.23-.22.23-.549q0-.31-.23-.54t-.54-.23q-.329 0-.549.23t-.22.54q0 .329.22.549t.549.22m-3 0q.31 0 .54-.22T8.27 12q0-.31-.23-.54t-.54-.23q-.329 0-.549.23t-.22.54q0 .329.22.549t.549.22m6 0q.31 0 .54-.22t.23-.549q0-.31-.23-.54t-.54-.23q-.329 0-.549.23t-.22.54q0 .329.22.549t.549.22m3 0q.31 0 .54-.22t.23-.549q0-.31-.23-.54t-.54-.23q-.329 0-.549.23t-.22.54q0 .329.22.549t.549.22M12 12"></svg:path>`,
})
export class MaterialSymbolsLightHomeMaxDotsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
