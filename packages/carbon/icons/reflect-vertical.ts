import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonReflectVerticalIcon],svg[carbon-reflect-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.79 19.386l7 9A1 1 0 0 1 23 30H9a1 1 0 0 1-.79-1.614l7-9a1 1 0 0 1 1.58 0M2 17v-2h28v2zm14-4a1 1 0 0 1-.79-.386l-7-9A1 1 0 0 1 9 2h14a1 1 0 0 1 .79 1.614l-7 9A1 1 0 0 1 16 13m-4.956-9L16 10.371L20.956 4Z"></svg:path>`,
})
export class CarbonReflectVerticalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
