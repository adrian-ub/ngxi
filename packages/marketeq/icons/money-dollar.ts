import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMoneyDollarIcon],svg[marketeq-money-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 18.75h-5.209a3.125 3.125 0 0 0-3.125 3.125v0A3.125 3.125 0 0 0 23.958 25h2.084a3.125 3.125 0 0 1 3.125 3.125v0a3.125 3.125 0 0 1-3.125 3.125h-5.209M25 33.333V31.25M43.75 12.5a2.083 2.083 0 0 0-2.083-2.083h-6.25a8.333 8.333 0 0 0 8.333 8.333zm-37.5 6.25a8.333 8.333 0 0 0 8.333-8.333h-6.25A2.083 2.083 0 0 0 6.25 12.5zm37.5 12.5a8.333 8.333 0 0 0-8.333 8.333h6.25A2.083 2.083 0 0 0 43.75 37.5zM6.25 37.5a2.083 2.083 0 0 0 2.083 2.083h6.25A8.333 8.333 0 0 0 6.25 31.25zM25 18.75v-2.083z"></svg:path><svg:path stroke="#306CFE" d="M41.667 10.417H8.333c-1.15 0-2.083.932-2.083 2.083v25c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.932 2.083-2.083v-25c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqMoneyDollarIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
