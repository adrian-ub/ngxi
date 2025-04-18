import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2OctagonIcon],svg[fluent-mdl2-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 562v796l-562 562H562L0 1358V562L562 0h796zm-128 53l-487-487H615L128 615v690l487 487h690l487-487z"></svg:path>`,
})
export class FluentMdl2OctagonIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
