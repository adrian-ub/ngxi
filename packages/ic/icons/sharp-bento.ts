import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBentoIcon],svg[ic-sharp-bento-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11V5h6v6zm0 8h6v-6h-6zM14 5v14H2V5zm-4.5 7c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5"></svg:path>`,
})
export class IcSharpBentoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
