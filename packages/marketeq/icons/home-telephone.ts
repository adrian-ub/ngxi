import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqHomeTelephoneIcon],svg[marketeq-home-telephone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 35.417v6.25a2.083 2.083 0 0 0 2.083 2.083h14.584a2.083 2.083 0 0 0 2.083-2.083V37.5M22.917 16.667h-8.334"></svg:path><svg:path stroke="#306CFE" d="M6.25 33.333V10.417a2.083 2.083 0 0 1 2.083-2.084H31.25v27.084H8.333a2.083 2.083 0 0 1-2.083-2.084M33.333 37.5h8.334a2.083 2.083 0 0 0 2.083-2.083V8.333a2.083 2.083 0 0 0-2.083-2.083h-8.334a2.083 2.083 0 0 0-2.083 2.083v27.084a2.083 2.083 0 0 0 2.083 2.083"></svg:path></svg:g>`,
})
export class MarketeqHomeTelephoneIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
