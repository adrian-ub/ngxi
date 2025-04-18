import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIncreaseLevelIcon],svg[carbon-increase-level-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 4l-5 3.75v6.5L15 12l-5 3.75v6.5L7 20l-5 3.75V30h2v-5.25l3-2.25l3 2.25V30h2V16.75l3-2.25l3 2.25V30h2V8.75l3-2.25l3 2.25V30h2V7.75z"></svg:path>`,
})
export class CarbonIncreaseLevelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
