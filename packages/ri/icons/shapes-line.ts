import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riShapesLineIcon],svg[ri-shapes-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1L6 11h12zm0 3.887L14.468 9H9.532zM6.75 20a2.75 2.75 0 1 1 0-5.5a2.75 2.75 0 0 1 0 5.5m0 2a4.75 4.75 0 1 0 0-9.5a4.75 4.75 0 0 0 0 9.5M15 15.5v4h4v-4zm-2 6v-8h8v8z"></svg:path>`,
})
export class RiShapesLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
