import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiRestoreIcon],svg[ooui-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.22 0L0 1.22l4 4V17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-1.8l2.8 2.8l1.2-1.22zM17 4V2h-3.5l-1-1h-5l-1 1h-.84l2 2zM8.66 5H16v7.34z"></svg:path>`,
})
export class OouiRestoreIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
