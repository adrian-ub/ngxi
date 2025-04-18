import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircle9FilledIcon],svg[tabler-circle-9-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m1 5h-2l-.15.005a2 2 0 0 0-1.844 1.838L9 9v2l.005.15a2 2 0 0 0 1.838 1.844L11 13h2v2h-2l-.007-.117A1 1 0 0 0 9 15a2 2 0 0 0 1.85 1.995L11 17h2l.15-.005a2 2 0 0 0 1.844-1.838L15 15V9l-.005-.15a2 2 0 0 0-1.838-1.844zm0 2v2h-2V9z"></svg:path></svg:g>`,
})
export class TablerCircle9FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
