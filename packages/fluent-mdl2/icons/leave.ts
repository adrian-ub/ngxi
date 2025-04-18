import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2LeaveIcon],svg[fluent-mdl2-leave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2011 960l-446 445l-90-90l291-291H768V896h998l-291-291l90-90zm-859 320h128v640H0V0h1280v640h-128V128H128v1664h1024z"></svg:path>`,
})
export class FluentMdl2LeaveIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
