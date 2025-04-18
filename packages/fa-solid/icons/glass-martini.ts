import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidGlassMartiniIcon],svg[fa-solid-glass-martini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M502.05 57.6C523.3 36.34 508.25 0 478.2 0H33.8C3.75 0-11.3 36.34 9.95 57.6L224 271.64V464h-56c-22.09 0-40 17.91-40 40c0 4.42 3.58 8 8 8h240c4.42 0 8-3.58 8-8c0-22.09-17.91-40-40-40h-56V271.64z"></svg:path>`,
})
export class FaSolidGlassMartiniIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
