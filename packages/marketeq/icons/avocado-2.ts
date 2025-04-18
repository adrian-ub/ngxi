import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqAvocado2Icon],svg[marketeq-avocado-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 35.417a5.56 5.56 0 0 1-5.208-5.834c0-3.208 2.333-8.75 5.208-8.75s5.208 5.542 5.208 8.75A5.563 5.563 0 0 1 25 35.417"></svg:path><svg:path stroke="#306CFE" d="M35.167 15.625C32.729 10.521 29.937 6.25 25 6.25s-7.73 4.27-10.167 9.375C12.396 20.729 10.417 25 10.417 31.25c0 6.896 6.541 12.5 14.583 12.5s14.583-5.604 14.583-12.5c0-6.25-2.083-10.667-4.416-15.625"></svg:path></svg:g>`,
})
export class MarketeqAvocado2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
