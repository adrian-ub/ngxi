import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psCropIcon],svg[ps-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 85H128V0H85v85H0v43h384v256H128V171H85v256h427v-43h-85zm-43 384h43v43h-43zM213 213h86v86h-86z"></svg:path>`,
})
export class PsCropIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
