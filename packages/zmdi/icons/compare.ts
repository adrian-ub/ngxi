import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCompareIcon],svg[zmdi-compare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149 48V5h43v470h-43v-43H43q-18 0-30.5-12.5T0 389V91q0-18 12.5-30.5T43 48zm0 320V240L43 368zM341 48q18 0 30.5 12.5T384 91v298q0 18-12.5 30.5T341 432H235V240l106 128V91H235V48z"></svg:path>`,
})
export class ZmdiCompareIcon {
  readonly viewBox = input("0 0 384 480")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
