import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixUserDataTypesIcon],svg[ix-user-data-types-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341.333 469.335h-42.666v-21.334H192v-64H85.333v-256h192v-64H384V42.668h42.667v85.333H384v-21.333h-64v85.333h64v-21.333h42.667v85.333H384v-21.333H277.333v-64H128v170.667h64v-64h106.667v-21.334h42.666v85.334h-42.666v-21.334h-64v85.334h64v-21.334h42.666z"></svg:path>`,
})
export class IxUserDataTypesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
