import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTableIcon],svg[ix-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 85.333v341.333H42.667V85.333zm-384 256V384l85.333-.001v-42.666zm213.333 0h-85.334v42.666h85.334zm128 0h-85.334v42.666h85.334zm-128-85.334h-85.334v42.667h85.334zm128 0h-85.334v42.667h85.334zm-128-85.333h-85.334v42.667h85.334zm128 0h-85.334v42.667h85.334zm-256 0H85.334v42.667h85.333zm-85.333 128h85.333v-42.667H85.334z"></svg:path>`,
})
export class IxTableIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
