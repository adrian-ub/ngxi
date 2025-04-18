import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCodeScriptIcon],svg[ix-code-script-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m279.376 121.305l40.477 13.492l-85.333 256l-40.478-13.492zm99.999 45.01l89.752 89.752l-89.752 89.751l-30.17-30.17l59.565-59.581l-59.565-59.582zm-246.87-.014l30.169 30.17l-59.573 59.572l59.573 59.591l-30.169 30.17l-89.752-89.752z"></svg:path>`,
})
export class IxCodeScriptIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
