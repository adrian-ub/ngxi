import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMeijerIcon],svg[arcticons-meijer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 23.518a1.91 1.91 0 0 1 1.905-1.905h0a1.91 1.91 0 0 1 1.905 1.905v3.143M9.5 21.613v5.143m3.81-3.238a1.91 1.91 0 0 1 1.905-1.905h0a1.91 1.91 0 0 1 1.905 1.905v3.143m5.592-.953c-.286.572-.953.953-1.62.953h0a1.91 1.91 0 0 1-1.904-1.905v-1.238a1.91 1.91 0 0 1 1.904-1.905h0a1.91 1.91 0 0 1 1.905 1.905v.666h-3.81"></svg:path><svg:circle cx="25.131" cy="19.517" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.131 21.613v5.143m3.239-5.143v5.715a1.91 1.91 0 0 1-1.906 1.905h0a1.88 1.88 0 0 1-1.333-.572"></svg:path><svg:circle cx="28.369" cy="19.517" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.141 25.708c-.286.572-.952.953-1.62.953h0a1.91 1.91 0 0 1-1.904-1.905v-1.238a1.91 1.91 0 0 1 1.905-1.905h0a1.91 1.91 0 0 1 1.905 1.905v.666h-3.81m5.978-.666a1.91 1.91 0 0 1 1.905-1.905h0m-1.905 0v5.143"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsMeijerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
