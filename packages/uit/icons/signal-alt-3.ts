import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitSignalAlt3Icon],svg[uit-signal-alt-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 16h-4a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5M6 22H3v-5h3zM22.5 2h-4a.5.5 0 0 0-.5.5v20a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-20a.5.5 0 0 0-.5-.5M22 22h-3V3h3zm-7.5-12h-4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5M14 22h-3V11h3z"></svg:path>`,
})
export class UitSignalAlt3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
