import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixChevronDownBarIcon],svg[ix-chevron-down-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M431.084 158.17L400.914 128L255.999 272.898L111.084 128l-30.17 30.17L256 333.255zM85.334 384h341.333v-42.667H85.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxChevronDownBarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
