import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryChargingSolidIcon],svg[mynaui-battery-charging-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.989 6.25H4A1.75 1.75 0 0 0 2.25 8v8c0 .966.784 1.75 1.75 1.75h5.293a1 1 0 0 1 .036-.086l2.959-4.913H8.5a.75.75 0 0 1-.67-1.086z"></svg:path><svg:path d="M11.013 17.75H18A1.75 1.75 0 0 0 19.75 16V8A1.75 1.75 0 0 0 18 6.25h-5.292a1 1 0 0 1-.036.085l-2.958 4.916h3.788a.75.75 0 0 1 .67 1.085zM21.75 11a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"></svg:path></svg:g>`,
})
export class MynauiBatteryChargingSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
