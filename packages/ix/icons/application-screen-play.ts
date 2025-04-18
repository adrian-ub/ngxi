import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixApplicationScreenPlayIcon],svg[ix-application-screen-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.333 85.336v341.333H42.667V85.336zm-42.666 106.667H85.333v192h341.334zm-213.334 32l111.304 64l-111.304 64zm213.334-96H85.333v21.333h341.334z"></svg:path>`,
})
export class IxApplicationScreenPlayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
