import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ViewAll2Icon],svg[fluent-mdl2-view-all-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 0v896H0V0zM768 768V128H128v640zM0 1920v-896h1920v896zm128-768v640h1664v-640zM1024 0h896v896h-896zm768 768V128h-640v640z"></svg:path>`,
})
export class FluentMdl2ViewAll2Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
