import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhOctoloaderfullIcon],svg[whh-octoloaderfull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 583V441l256-106v354zM643 280L749 25l250 250l-255 107zm-202-24L335 0h354L583 256zM281 381L25 275L276 25l106 255zm-25 202L0 689V335l256 106zm126 161L276 999L25 749l256-106zm201 24l106 256H335l106-256zm161-125l255 106l-250 250l-106-255z"></svg:path>`,
})
export class WhhOctoloaderfullIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
