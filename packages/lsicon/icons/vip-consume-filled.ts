import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconVipConsumeFilledIcon],svg[lsicon-vip-consume-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.624 2.17A.5.5 0 0 1 5 2h6a.5.5 0 0 1 .376.17l3.5 4a.5.5 0 0 1-.022.684l-1.5 1.5l-.708-.708l1.17-1.169L10.773 3H5.227L2.173 6.49l5.84 6.29l1.133-1.134l.708.708l-1.5 1.5a.5.5 0 0 1-.72-.014l-6.5-7a.5.5 0 0 1-.01-.67zm3.002 8.662l-4-4.5l.748-.664L8 9.748l3.626-4.08l.748.664l-4 4.5a.5.5 0 0 1-.748 0M12.5 9v2.293l.646-.647l.708.708l-1.5 1.5a.5.5 0 0 1-.708 0l-1.5-1.5l.708-.708l.646.647V9z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconVipConsumeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
