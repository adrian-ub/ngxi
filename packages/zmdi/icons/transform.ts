import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTransformIcon],svg[zmdi-transform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 368h-86v43h43l-64 64l-64-64h43v-43H128q-18 0-30.5-12.5T85 325V155H0v-43h85V69H43l64-64l64 64h-43v256h299zM171 155v-43h128q17 0 29.5 12.5T341 155v128h-42V155z"></svg:path>`,
})
export class ZmdiTransformIcon {
  readonly viewBox = input("0 0 432 480")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
