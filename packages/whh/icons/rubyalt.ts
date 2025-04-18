import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhRubyaltIcon],svg[whh-rubyalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 896L0 320L256 0h512l256 320zM736 64H288L96 320l416 480l416-480zM512 704V128h190l130 192z"></svg:path>`,
})
export class WhhRubyaltIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
