import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitLayersAltIcon],svg[uit-layers-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 2h-13a.5.5 0 0 0-.5.5V7H5.5a.5.5 0 0 0-.5.5V12H2.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V19h4.5a.5.5 0 0 0 .5-.5V16h4.5a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5M11 18.5V21H3v-8h8zm5-3V18h-4v-5.5a.5.5 0 0 0-.5-.5H6V8h10zm5-.5h-4V7.5a.5.5 0 0 0-.5-.5H9V3h12z"></svg:path>`,
})
export class UitLayersAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
