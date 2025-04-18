import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsOilBarrelIcon],svg[hugeicons-oil-barrel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:ellipse cx="12" cy="4" rx="8" ry="2"></svg:ellipse><svg:path d="M12 12.5a1.5 1.5 0 0 0 1.5-1.5c0-1-1.5-2.5-1.5-2.5S10.5 10 10.5 11a1.5 1.5 0 0 0 1.5 1.5"></svg:path><svg:path d="M19 5v5.547c.637.43 1 .926 1 1.453c0 1.657-3.582 3-8 3s-8-1.343-8-3c0-.527.363-1.023 1-1.453V5"></svg:path><svg:path d="M19 13.5v4.047c.637.43 1 .926 1 1.453c0 1.657-3.582 3-8 3s-8-1.343-8-3c0-.527.363-1.023 1-1.453V13.5"></svg:path></svg:g>`,
})
export class HugeiconsOilBarrelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
