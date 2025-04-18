import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsProgressIcon],svg[file-icons-progress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120.237 481.196V343.072L0 412.631zM248.423 2.236c-4.968-2.981-12.918-2.981-17.886 0L106.325 73.782l239.48 138.123v277.24L470.016 417.6c4.969-2.98 8.944-9.937 8.944-15.899V135.39zm-137.13 146.073L0 211.905l172.902 100.363V512l111.294-63.596c4.968-2.981 8.943-9.937 8.943-15.9V242.71l-163.959-94.4c-4.968-2.981-12.918-2.981-17.886 0"></svg:path>`,
})
export class FileIconsProgressIcon {
  readonly viewBox = input("0 0 479 512")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
