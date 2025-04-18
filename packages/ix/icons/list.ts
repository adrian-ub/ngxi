import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixListIcon],svg[ix-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 64H448v42.667H170.667zM64 64h64v42.667H64zm106.667 106.667H448v42.666H170.667zm-106.667 0h64v42.666H64zm106.667 106.666H448V320H170.667zm-106.667 0h64V320H64zM170.667 384H448v42.667H170.667zM64 384h64v42.667H64z"></svg:path>`,
})
export class IxListIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
