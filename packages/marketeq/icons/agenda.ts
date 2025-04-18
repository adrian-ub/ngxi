import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqAgendaIcon],svg[marketeq-agenda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 6.25v12.5l-4.167-2.083l-4.166 2.083V6.25zm18.75 8.333h-4.167v4.167h4.167zm0 12.5h-4.167v4.167h4.167z"></svg:path><svg:path stroke="#306CFE" d="M39.583 41.667V8.333c0-1.15-.932-2.083-2.083-2.083H10.417c-1.15 0-2.084.933-2.084 2.083v33.334c0 1.15.933 2.083 2.084 2.083H37.5c1.15 0 2.083-.933 2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqAgendaIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
