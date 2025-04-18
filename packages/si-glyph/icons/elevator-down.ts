import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphElevatorDownIcon],svg[si-glyph-elevator-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M2.334 14.943c-.736 0-1.334-.748-1.334-1.484s.598-1.334 1.334-1.334h2.184l8-5.999h3.148c.736 0 1.334.597 1.334 1.333s-.598 1.521-1.334 1.521h-2.184L5.47 14.943z"></svg:path><svg:g transform="translate(4 1)"><svg:ellipse cx="2.488" cy="1.5" rx="1.488" ry="1.5"></svg:ellipse><svg:path d="M2.482 4.042c-.789 0-1.43.64-1.43 1.428v1.856l-.904.938a.358.358 0 0 0 .228.632c.081 0 .16-.027.228-.083l3.305-2.937V5.47c0-.159-.031-.312-.081-.456a1.42 1.42 0 0 0-1.346-.972"></svg:path></svg:g></svg:g>`,
})
export class SiGlyphElevatorDownIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
