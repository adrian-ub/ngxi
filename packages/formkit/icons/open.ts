import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitOpenIcon],svg[formkit-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 3h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5m0 3h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5m0 3h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"></svg:path>`,
})
export class FormkitOpenIcon {
  readonly viewBox = input("0 0 16 11")
  readonly width = input("1.46em")
  readonly height = input("1em")
}
