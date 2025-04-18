import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhOctoloadersevenIcon],svg[whh-octoloaderseven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 583V441l256-106v354zM643 280L749 25l250 250l-255 107zm-202-24L335 0h354L583 256zM281 381L25 275L275 25l106 255zm-28-244L138 253l127 53l41-41zm3 446L0 689V335l256 106zm125 161L275 999L25 749l256-106zm202 24l106 256H335l106-256zm161-125l255 106l-250 250l-106-255z"></svg:path>`,
})
export class WhhOctoloadersevenIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
