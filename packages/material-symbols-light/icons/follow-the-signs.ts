import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFollowTheSignsIcon],svg[material-symbols-light-follow-the-signs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 5.192q-.69 0-1.191-.5q-.501-.502-.501-1.192t.5-1.191T9.5 1.808t1.191.5q.501.502.501 1.192t-.5 1.191q-.502.501-1.192.501M3.654 22.5L6.442 8.054L3.5 9.284V12.5h-1V8.608l4.616-1.9q.675-.275 1.25-.14t.911.69l.97 1.58q.655 1.062 1.773 1.785q1.119.723 2.48.839v1q-1.766-.116-3.101-1.076q-1.336-.959-2.137-2.274l-.889 4.519l2.127 2.088V22.5h-1v-5.673l-2.92-2.789L4.678 22.5zm13.404.192v-14h-3.75V2.308h8.384v6.384h-3.75v14zm.967-15.16L20.058 5.5l-2.033-2.033l-.633.633l.958.958h-3.542v.884h3.542l-.958.958z"></svg:path>`,
})
export class MaterialSymbolsLightFollowTheSignsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
