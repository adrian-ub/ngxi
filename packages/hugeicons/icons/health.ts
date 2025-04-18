import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHealthIcon],svg[hugeicons-health-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.463 3.994c-2.682-1.645-5.023-.983-6.429.073c-.576.433-.864.65-1.034.65s-.458-.217-1.034-.65C9.56 3.011 7.219 2.35 4.537 3.994C1.018 6.152.222 13.274 8.34 19.283c1.546 1.144 2.319 1.716 3.66 1.716s2.114-.572 3.66-1.716c8.118-6.009 7.322-13.13 3.803-15.29M12 9v6m-3-3h6" color="currentColor"></svg:path>`,
})
export class HugeiconsHealthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
