import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CalendarMirroredIcon],svg[fluent-mdl2-calendar-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1280 768h-128v128h128zm-384 768H768v128h128zM512 768H384v128h128zm384 0H768v128h128zm384 256h-128v128h128zm384 0h-128v128h128zm-1152 0H384v128h128zm384 0H768v128h128zm384 256h-128v128h128zm384 0h-128v128h128zm-1152 0H384v128h128zm384 0H768v128h128zm384 256h-128v128h128zm384 0h-128v128h128zM0 128v1792h2048V128h-384V0h-128v128H512V0H384v128zm1920 128v256H128V256h256v128h128V256h1024v128h128V256zM128 1792V640h1792v1152z"></svg:path>`,
})
export class FluentMdl2CalendarMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
