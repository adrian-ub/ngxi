import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPolygonIcon],svg[token-branded-polygon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedPolygon0)" d="m16.364 15.217l4.27-2.435a.73.73 0 0 0 .366-.627V7.284a.72.72 0 0 0-.366-.627l-4.27-2.435a.74.74 0 0 0-.732 0l-4.27 2.435a.72.72 0 0 0-.366.627v8.704l-2.994 1.707l-2.994-1.707v-3.415l2.994-1.707l1.974 1.127V9.702l-1.608-.918a.75.75 0 0 0-.732 0l-4.27 2.435a.72.72 0 0 0-.366.627v4.87c0 .258.14.498.366.627l4.27 2.436a.75.75 0 0 0 .732 0l4.27-2.436a.72.72 0 0 0 .366-.626V8.012l.053-.03l2.94-1.677l2.994 1.707v3.415l-2.994 1.707l-1.972-1.124v2.291l1.606.916a.75.75 0 0 0 .732 0z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedPolygon0" x1="2.942" x2="20.119" y1="17.194" y2="7.101" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#A726C1"></svg:stop><svg:stop offset=".88" stop-color="#803BDF"></svg:stop><svg:stop offset="1" stop-color="#7B3FE4"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedPolygonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
