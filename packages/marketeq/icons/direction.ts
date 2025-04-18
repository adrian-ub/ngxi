import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDirectionIcon],svg[marketeq-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M14.583 43.75H31.25zm12.5-31.25V8.333A2.083 2.083 0 0 0 25 6.25h-4.167a2.083 2.083 0 0 0-2.083 2.083V12.5zM18.75 25v18.75h8.333V25z"></svg:path><svg:path stroke="#344054" d="M12.5 12.5a2.083 2.083 0 0 0-2.083 2.083v8.334A2.083 2.083 0 0 0 12.5 25h22.23a2.08 2.08 0 0 0 1.728-.937l2.771-4.167a2.08 2.08 0 0 0 0-2.292l-2.77-4.166a2.08 2.08 0 0 0-1.73-.938z"></svg:path></svg:g>`,
})
export class MarketeqDirectionIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
