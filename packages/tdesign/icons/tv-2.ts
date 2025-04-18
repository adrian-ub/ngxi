import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTv2Icon],svg[tdesign-tv-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h24v15H0zm2 2v11h20V5zm2 15h16v2H4z"></svg:path>`,
})
export class TdesignTv2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
