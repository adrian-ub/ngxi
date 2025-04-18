import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2UneditableSolidMirrored12Icon],svg[fluent-mdl2-uneditable-solid-mirrored-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M574 994L292 712l422-422l280 284zm1474 1052l-753-333l-420-419l-729 729l-121-121L1902 25l121 121l-730 730l407 411zM140 562q-32-31-58-60t-44-62t-28-70t-10-84q0-61 23-113t63-91t93-60T294 0q47 0 83 10t68 28t59 44t60 57z"></svg:path>`,
})
export class FluentMdl2UneditableSolidMirrored12Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
