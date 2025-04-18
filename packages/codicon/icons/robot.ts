import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconRobotIcon],svg[codicon-robot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0M5 8a1 1 0 1 0 2 0a1 1 0 0 0-2 0m3 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-2.49 3.251a2.7 2.7 0 0 0 1.37-.74l.7.71A3.7 3.7 0 0 1 8 12.291a3.8 3.8 0 0 1-1.42-.29a3.6 3.6 0 0 1-1.19-.79l.7-.71a2.71 2.71 0 0 0 2.42.74z"></svg:path><svg:path d="M9.5 1.5a1.5 1.5 0 0 1-1 1.415V3H11a3 3 0 0 1 3 3v1l1 1v2l-1 1v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-1l-1-1V8l1-1V6a3 3 0 0 1 3-3h2.5v-.085a1.5 1.5 0 1 1 2-1.415M5 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></svg:path></svg:g>`,
})
export class CodiconRobotIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
