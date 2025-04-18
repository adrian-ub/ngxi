import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqFlask3Icon],svg[marketeq-flask-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M37.5 43.75h-25a2.084 2.084 0 0 1-1.833-3.062l10.166-18.896V6.25h8.334v15.542l10.166 18.896A2.083 2.083 0 0 1 37.5 43.75"></svg:path><svg:path stroke="#344054" d="M18.75 6.25h12.5"></svg:path></svg:g>`,
})
export class MarketeqFlask3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
