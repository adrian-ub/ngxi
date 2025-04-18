import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignThumbUpFilledIcon],svg[tdesign-thumb-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.158 1.596A4 4 0 0 1 15.5 5.54V8h5.32a2 2 0 0 1 1.973 2.329l-1.667 10a2 2 0 0 1-1.973 1.67H7V10.803l3.879-9.42zM4 22H2V10h2z"></svg:path>`,
})
export class TdesignThumbUpFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
