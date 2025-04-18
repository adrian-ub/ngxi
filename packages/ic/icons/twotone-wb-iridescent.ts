import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneWbIridescentIcon],svg[ic-twotone-wb-iridescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11h10v2H7z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M5 15h14V9H5zm2-4h10v2H7zm4-10h2v3h-2zm6.25 4.39l1.41 1.41l1.8-1.79l-1.42-1.41zM11 20h2v3h-2zm6.24-1.29l1.79 1.8l1.42-1.42l-1.8-1.79zM5.34 6.805l-1.788-1.79L4.96 3.61l1.788 1.788zM3.55 19.08l1.41 1.42l1.79-1.8l-1.41-1.41z"></svg:path>`,
})
export class IcTwotoneWbIridescentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
