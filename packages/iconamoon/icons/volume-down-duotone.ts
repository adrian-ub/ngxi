import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonVolumeDownDuotoneIcon],svg[iconamoon-volume-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M13 12c0-1.884-.163-3.73-.475-5.525c-.123-.704-.937-1.019-1.52-.605L8.52 7.632A2 2 0 0 1 7.363 8H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2.363a2 2 0 0 1 1.157.368l2.485 1.762c.583.414 1.397.1 1.52-.605A32 32 0 0 0 13 12" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M13 12c0-1.884-.163-3.73-.475-5.525c-.123-.704-.937-1.019-1.52-.605L8.52 7.632A2 2 0 0 1 7.363 8H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2.363a2 2 0 0 1 1.157.368l2.485 1.762c.583.414 1.397.1 1.52-.605A32 32 0 0 0 13 12Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.877 9a36.5 36.5 0 0 1 0 6"></svg:path></svg:g>`,
})
export class IconamoonVolumeDownDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
