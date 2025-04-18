import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psFlagCornerIcon],svg[ps-flag-corner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 384h107v64h330l-72-171l72-170H325V43H48V21q0-9-6-15T27 0Q17 0 11 6T5 21v491h43zm277-235h96l-55 128l55 128H197v-21h128zM48 235V85h235v256H48z"></svg:path>`,
})
export class PsFlagCornerIcon {
  readonly viewBox = input("0 0 488 512")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
