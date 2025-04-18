import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineBentoIcon],svg[ic-baseline-bento-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11V5h4c1.1 0 2 .9 2 2v4zm4 8c1.1 0 2-.9 2-2v-4h-6v6zM14 5v14H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2zm-4.5 7c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5"></svg:path>`,
})
export class IcBaselineBentoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
