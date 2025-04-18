import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MusicInCollectionFillIcon],svg[fluent-mdl2-music-in-collection-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 1408q0 62-29 109t-76 80t-104 50t-111 17t-111-17t-103-49t-76-80t-30-110q0-61 29-109t76-80t104-50t111-17q51 0 100 12t92 39V226L768 450v1214q0 62-29 109t-76 80t-104 50t-111 17t-111-17t-103-49t-76-80t-30-110q0-61 29-109t76-80t104-50t111-17q51 0 100 12t92 39V350L1792 62z"></svg:path>`,
})
export class FluentMdl2MusicInCollectionFillIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
