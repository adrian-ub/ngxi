import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFigmaLogoIcon],svg[ph-figma-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 96a40 40 0 0 0-24-72H96a40 40 0 0 0-24 72a40 40 0 0 0 1.37 65A44 44 0 1 0 144 196v-36a40 40 0 1 0 48-64m0-32a24 24 0 0 1-24 24h-24V40h24a24 24 0 0 1 24 24M72 64a24 24 0 0 1 24-24h32v48H96a24 24 0 0 1-24-24m24 88a24 24 0 0 1 0-48h32v48zm32 44a28 28 0 1 1-28-28h28Zm40-44a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhFigmaLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
