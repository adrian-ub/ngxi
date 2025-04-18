import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsRoadAltFillIcon],svg[lets-icons-road-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4 18L7 4m13 14L17 4m-5 7V9m0-3V4"></svg:path><svg:path fill="currentColor" d="m9.158 19.54l2.118-4.502c.231-.49.347-.736.505-.813a.5.5 0 0 1 .438 0c.158.077.274.322.505.813l2.118 4.502c.347.737.52 1.106.455 1.298a.5.5 0 0 1-.368.326c-.198.043-.543-.173-1.235-.605l-1.27-.794c-.154-.096-.23-.144-.313-.163a.5.5 0 0 0-.222 0c-.082.019-.16.067-.313.163l-1.27.794c-.692.432-1.037.648-1.235.605a.5.5 0 0 1-.368-.326c-.066-.192.108-.56.455-1.298"></svg:path></svg:g>`,
})
export class LetsIconsRoadAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
