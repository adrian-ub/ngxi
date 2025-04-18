import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSuitcaseIcon],svg[fa-suitcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 256h512V128H640zm-352 0v1280h-64q-92 0-158-66T0 1312V480q0-92 66-158t158-66zm1120 0v1280H384V256h128V96q0-40 28-68t68-28h576q40 0 68 28t28 68v160zm384 224v832q0 92-66 158t-158 66h-64V256h64q92 0 158 66t66 158"></svg:path>`,
})
export class FaSuitcaseIcon {
  readonly viewBox = input("0 0 1792 1536")
  readonly width = input("1.17em")
  readonly height = input("1em")
}
