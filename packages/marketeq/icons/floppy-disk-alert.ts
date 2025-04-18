import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqFloppyDiskAlertIcon],svg[marketeq-floppy-disk-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="M25 27.083v6.25"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M25.104 42.708h-.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M35.417 43.75h4.166a2.083 2.083 0 0 0 2.084-2.083V14.583L33.333 6.25H10.417a2.083 2.083 0 0 0-2.084 2.083v33.334a2.083 2.083 0 0 0 2.084 2.083h4.166"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M31.25 6.25h-12.5v8.333h12.5z"></svg:path></svg:g>`,
})
export class MarketeqFloppyDiskAlertIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
