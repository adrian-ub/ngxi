import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AddFavoriteIcon],svg[fluent-mdl2-add-favorite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1370 1536l-103-329l405-311h-502l-146-467l-138 467H384l397 311l-154 493l397-306l256 197v162l-256-197l-640 492l248-794L0 768h784L1024 0l240 768h784l-632 486l88 282zm422-128v256h256v128h-256v256h-128v-256h-256v-128h256v-256z"></svg:path>`,
})
export class FluentMdl2AddFavoriteIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
