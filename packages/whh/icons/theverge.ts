import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhThevergeIcon],svg[whh-theverge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 896H448L0 128L64 0h896l64 128zM320 192l192 320l192-320z"></svg:path>`,
})
export class WhhThevergeIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
