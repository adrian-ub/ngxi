import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqWorkAgendaIcon],svg[marketeq-work-agenda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M6.25 33.333h4.167m-2.084 8.334V8.333a2.083 2.083 0 0 1 2.084-2.083h31.25a2.083 2.083 0 0 1 2.083 2.083v33.334a2.083 2.083 0 0 1-2.083 2.083h-31.25a2.083 2.083 0 0 1-2.084-2.083m-2.083-25h4.167zm0 8.333h4.167z"></svg:path><svg:path stroke="#344054" d="M41.667 43.75h-6.25V6.25h6.25a2.083 2.083 0 0 1 2.083 2.083v33.334a2.083 2.083 0 0 1-2.083 2.083"></svg:path></svg:g>`,
})
export class MarketeqWorkAgendaIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
