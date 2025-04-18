import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPentagonDuotoneIcon],svg[ph-pentagon-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m223.61 102.83l-32 107.62A8 8 0 0 1 184 216H72a8 8 0 0 1-7.62-5.55l-32-107.62a8 8 0 0 1 2.88-8.9l88-68.38a8 8 0 0 1 9.46 0l88 68.38a8 8 0 0 1 2.89 8.9" opacity=".2"></svg:path><svg:path d="m225.56 87.56l-87.92-68.31l-.18-.14a15.93 15.93 0 0 0-18.92 0l-.18.14l-87.92 68.31a16 16 0 0 0-5.7 17.63l32 107.54l.06.17A15.94 15.94 0 0 0 72 224h112a15.94 15.94 0 0 0 15.23-11.1l.06-.17l32-107.54a16 16 0 0 0-5.73-17.63m-9.62 13L184 208H72L40 100.56l-.06-.17l.18-.14L128 32l87.82 68.23l.18.14Z"></svg:path></svg:g>`,
})
export class PhPentagonDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
