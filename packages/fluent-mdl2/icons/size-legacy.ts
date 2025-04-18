import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SizeLegacyIcon],svg[fluent-mdl2-size-legacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 1152h128v768H0V128h1792v512h128zM128 1792h512V640h1024V256H128zm640 0h512v-640h512V768H768zm1152 0v-512h-512v512z"></svg:path>`,
})
export class FluentMdl2SizeLegacyIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
