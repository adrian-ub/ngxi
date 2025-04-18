import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconUserNewFilledIcon],svg[lsicon-user-new-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m8-.54V4h-1v4h1V6.175l.103.129l.007.008c.253.317.492.616.669.867q.133.189.193.303L13 7.54V8h1V4h-1v1.825l-.103-.129l-.007-.008a20 20 0 0 1-.669-.867a3 3 0 0 1-.193-.303zM2 14v-.5A4.5 4.5 0 0 1 6.5 9h1a4.5 4.5 0 0 1 4.5 4.5v.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUserNewFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
