import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDatabase2Icon],svg[marketeq-database-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M41.667 18.75H8.333a2.083 2.083 0 0 1-2.083-2.083V8.333A2.083 2.083 0 0 1 8.333 6.25h33.334a2.083 2.083 0 0 1 2.083 2.083v8.334a2.083 2.083 0 0 1-2.083 2.083m0 25H8.333a2.083 2.083 0 0 1-2.083-2.083v-8.334a2.083 2.083 0 0 1 2.083-2.083h33.334a2.083 2.083 0 0 1 2.083 2.083v8.334a2.083 2.083 0 0 1-2.083 2.083"></svg:path><svg:path stroke="#344054" d="M41.667 18.75H8.333c-1.15 0-2.083.933-2.083 2.083v8.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083v-8.334c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqDatabase2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
