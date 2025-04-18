import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCompAlignBottomSolidIcon],svg[iconoir-comp-align-bottom-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 21H2"></svg:path><svg:path fill="currentColor" d="M8 15V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z"></svg:path></svg:g>`,
})
export class IconoirCompAlignBottomSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
