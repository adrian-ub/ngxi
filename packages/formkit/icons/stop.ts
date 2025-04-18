import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitStopIcon],svg[formkit-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 14h-9c-.83 0-1.5-.67-1.5-1.5v-9C2 2.67 2.67 2 3.5 2h9c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5m-9-11c-.28 0-.5.22-.5.5v9c0 .28.22.5.5.5h9c.28 0 .5-.22.5-.5v-9c0-.28-.22-.5-.5-.5z"></svg:path>`,
})
export class FormkitStopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
