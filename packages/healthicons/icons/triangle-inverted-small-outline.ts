import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleInvertedSmallOutlineIcon],svg[healthicons-triangle-inverted-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 35c-.379 0-.725-.181-.894-.468l-12-20.307a.735.735 0 0 1 .043-.824c.183-.25.504-.401.851-.401h24c.347 0 .668.152.85.401c.183.25.2.561.044.824l-12 20.307c-.169.287-.515.468-.894.468m0-2.738l10.382-17.57H13.618z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTriangleInvertedSmallOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
