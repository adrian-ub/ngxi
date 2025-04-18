import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AddFavoriteFillIcon],svg[fluent-mdl2-add-favorite-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1860 832l-519 399l90 286l-23 19h-128v78l-39 28l-217-167l-519 399l202-643l-519-399h643l193-618l193 618z"></svg:path>`,
})
export class FluentMdl2AddFavoriteFillIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
