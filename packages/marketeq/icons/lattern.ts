import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqLatternIcon],svg[marketeq-lattern-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 14.583a4.167 4.167 0 1 0 0-8.333a4.167 4.167 0 0 0 0 8.333"></svg:path><svg:path stroke="#306CFE" d="M16.667 14.583h16.666A4.167 4.167 0 0 1 37.5 18.75v25h-25v-25a4.167 4.167 0 0 1 4.167-4.167M25 43.75v-8.333"></svg:path><svg:path stroke="#344054" d="M8.333 43.75h33.334m-20.834-12.5A3.895 3.895 0 0 0 25 35.417a3.96 3.96 0 0 0 4.167-4.167c0-2.792-2.084-3.125-2.084-8.333c-4.166 2.083-6.25 5.396-6.25 8.333"></svg:path></svg:g>`,
})
export class MarketeqLatternIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
