import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhOctoloadersixIcon],svg[whh-octoloadersix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 583V441l256-106v354zM643 280L749 25l251 250l-256 106zm-202-24L335 0h354L583 256zM281 381L24 275L275 24l106 256zm-28-244L138 253l127 53l41-41zm3 446L0 689V335l256 106zM64 430v164l128-53v-58zm317 313L275 999L24 749l257-106zm202 25l106 256H335l106-256zm161-125l256 106l-251 250l-106-256z"></svg:path>`,
})
export class WhhOctoloadersixIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
