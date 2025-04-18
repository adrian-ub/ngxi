import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFormatPainterOutlineIcon],svg[lsicon-format-painter-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M6 13v-2.5M8 13V9.5m2 3.5v-2.5m-7-3h10m.5-2v8h-11v-8h4v-3h3v3z"></svg:path>`,
})
export class LsiconFormatPainterOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
