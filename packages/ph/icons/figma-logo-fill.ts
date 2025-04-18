import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFigmaLogoFillIcon],svg[ph-figma-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 96a40 40 0 0 0-24-72H96a40 40 0 0 0-24 72a40 40 0 0 0 1.37 65A44 44 0 1 0 144 196v-36a40 40 0 1 0 48-64m-64 56H96a24 24 0 0 1 0-48h32Zm40-64h-24V40h24a24 24 0 0 1 0 48"></svg:path>`,
})
export class PhFigmaLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
