import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBananasLeftIcon],svg[marketeq-bananas-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M28.667 31.083a30.1 30.1 0 0 0 13.125-2.958a3.458 3.458 0 0 0-2.334-6.458c-2.975.691-6.037.93-9.083.708c-7.02-.604-11.48-5.542-13.52-7.792"></svg:path><svg:path stroke="#306CFE" d="M8.333 12.5V8.333a2.083 2.083 0 0 1 2.084-2.083h4.166a2.083 2.083 0 0 1 2.084 2.083V12.5A18.94 18.94 0 0 0 25 29.333c4.167 2.73 10.417 3.271 14.583 3.313a4.167 4.167 0 0 1 4.167 4.166a4.17 4.17 0 0 1-2.417 3.771c-5.604 2.5-19.708 7.167-29.896-3.458C2.083 27.25 8.333 12.5 8.333 12.5"></svg:path></svg:g>`,
})
export class MarketeqBananasLeftIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
