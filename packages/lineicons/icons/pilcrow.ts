import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsPilcrowIcon],svg[lineicons-pilcrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.583 4.75V20a.75.75 0 0 1-1.5 0v-9.028H7.611a3.861 3.861 0 1 1 0-7.722h12.89a.75.75 0 0 1 0 1.5h-4.585V20a.75.75 0 0 1-1.5 0V4.75zm-1.5 4.722V4.75H7.611a2.361 2.361 0 0 0 0 4.722z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsPilcrowIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
