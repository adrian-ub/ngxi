import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SubstitutionsInIcon],svg[fluent-mdl2-substitutions-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1045 0l875 1278h-512v770H638v-770H128zm235 1150h397l-635-927l-665 927h389v770h514z"></svg:path>`,
})
export class FluentMdl2SubstitutionsInIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
