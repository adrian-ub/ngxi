import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epDataBoardIcon],svg[ep-data-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 128h960v64H32z"></svg:path><svg:path fill="currentColor" d="M192 192v512h640V192zm-64-64h768v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32z"></svg:path><svg:path fill="currentColor" d="M322.176 960H248.32l144.64-250.56l55.424 32zm453.888 0h-73.856L576 741.44l55.424-32z"></svg:path>`,
})
export class EpDataBoardIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
