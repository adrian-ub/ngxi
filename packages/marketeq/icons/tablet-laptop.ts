import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqTabletLaptopIcon],svg[marketeq-tablet-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M18.75 31.25H6.25v2.083a2.083 2.083 0 0 0 2.083 2.084H18.75zm0-14.583a2.083 2.083 0 0 1 2.083-2.084h20.834v-6.25a2.083 2.083 0 0 0-2.084-2.083H10.417a2.083 2.083 0 0 0-2.084 2.083V31.25H18.75z"></svg:path><svg:path stroke="#344054" d="M41.667 14.583H20.833c-1.15 0-2.083.933-2.083 2.084v25c0 1.15.933 2.083 2.083 2.083h20.834c1.15 0 2.083-.933 2.083-2.083v-25c0-1.15-.933-2.084-2.083-2.084"></svg:path></svg:g>`,
})
export class MarketeqTabletLaptopIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
