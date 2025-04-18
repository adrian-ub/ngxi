import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiCemeteryJpIcon],svg[maki-cemetery-jp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 11h-3V2.5a.945.945 0 0 0-1-1a.945.945 0 0 0-1 1V11h-3a1 1 0 0 0 0 2h8a.945.945 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MakiCemeteryJpIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
