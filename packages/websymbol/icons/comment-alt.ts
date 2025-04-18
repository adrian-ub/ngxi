import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolCommentAltIcon],svg[websymbol-comment-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1179 465q0 126-79 233.5T885 868t-296 62q-122 0-234-39l2 3L0 1001q44-59 70.5-126.5T102 769l4-38Q0 611 0 465q0-126 79-233T293.5 63T589 1t296 62t215 169t79 233"></svg:path>`,
})
export class WebsymbolCommentAltIcon {
  readonly viewBox = input("0 0 1179 1000")
  readonly width = input("1.18em")
  readonly height = input("1em")
}
