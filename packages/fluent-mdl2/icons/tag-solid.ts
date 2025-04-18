import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TagSolidIcon],svg[fluent-mdl2-tag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 0h896v896L896 1920L0 1024zm448 624q36 0 68-14t56-38t38-56t14-68t-14-68t-38-56t-56-38t-68-14t-68 14t-56 38t-38 56t-14 68t14 68t38 56t56 38t68 14"></svg:path>`,
})
export class FluentMdl2TagSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
