import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonVolumeUpLightIcon],svg[iconamoon-volume-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20.803 8a40.5 40.5 0 0 1 0 8"></svg:path><svg:path stroke-linejoin="round" d="M13 12c0-1.884-.163-3.73-.475-5.525c-.123-.704-.937-1.019-1.52-.605L8.52 7.632A2 2 0 0 1 7.363 8H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2.363a2 2 0 0 1 1.157.368l2.485 1.762c.583.414 1.397.1 1.52-.605A32 32 0 0 0 13 12Z"></svg:path><svg:path stroke-linecap="round" d="M16.877 9a36.5 36.5 0 0 1 0 6"></svg:path></svg:g>`,
})
export class IconamoonVolumeUpLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
