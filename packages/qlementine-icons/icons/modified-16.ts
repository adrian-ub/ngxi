import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsModified16Icon],svg[qlementine-icons-modified-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8c0 1.66-1.34 3-3 3S5 9.66 5 8s1.34-3 3-3s3 1.34 3 3"></svg:path>`,
})
export class QlementineIconsModified16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
