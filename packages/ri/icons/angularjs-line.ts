import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAngularjsLineIcon],svg[ri-angularjs-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.524 16.65l.489-.27l1.118-9.71l-7.13-2.546l-7.132 2.545l1.119 9.71l.474.263L12 4.21zm-1.1.61h-.798l-1.168-2.92H9.523l-1.169 2.92h-.778L12 19.713zM12 2l9.3 3.32l-1.418 12.31L12 22l-7.88-4.37L2.7 5.32zm1.698 10.54L12 8.45l-1.698 4.09z"></svg:path>`,
})
export class RiAngularjsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
