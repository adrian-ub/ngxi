import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCombineIcon],svg[ix-combine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M192 85.333v85.333h-42.667V128h-64v256h64v-42.667H192v85.333H42.667V85.333zm277.334 0v341.333H320v-85.333h42.666l.001 42.667h64V128h-64v42.666H320V85.333zm-192 64l-.001 85.333h85.334v42.667h-85.334v85.333h-42.666v-85.333h-85.333v-42.667h85.333v-85.333z"></svg:path>`,
})
export class IxCombineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
