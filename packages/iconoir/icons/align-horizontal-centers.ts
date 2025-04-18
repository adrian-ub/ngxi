import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirAlignHorizontalCentersIcon],svg[iconoir-align-horizontal-centers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 22V2"></svg:path><svg:path d="M19 16H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2Z"></svg:path></svg:g>`,
})
export class IconoirAlignHorizontalCentersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
