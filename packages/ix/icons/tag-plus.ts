import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTagPlusIcon],svg[ix-tag-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M469.333 277.333L256 64H64v192l213.333 213.333v-60.352L106.667 238.315V106.667h131.648l170.666 170.666zM192 160c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32"></svg:path><svg:path d="m426.667 320l-.001 64h64.001v42.667l-64.001-.001l.001 64.001H384v-64.001l-64 .001V384h64v-64z"></svg:path></svg:g>`,
})
export class IxTagPlusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
