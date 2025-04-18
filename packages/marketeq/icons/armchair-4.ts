import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqArmchair4Icon],svg[marketeq-armchair-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M12.5 18.75v-4.167a8.333 8.333 0 0 1 8.333-8.333h8.334a8.333 8.333 0 0 1 8.333 8.333v4.167m-2.083 25v-4.167M14.583 43.75v-4.167z"></svg:path><svg:path stroke="#306CFE" d="M37.167 18.75a6.52 6.52 0 0 0-5.917 6.604v5.896h-12.5v-5.896a6.52 6.52 0 0 0-5.917-6.604a6.25 6.25 0 0 0-2.416 12.125V37.5a2.083 2.083 0 0 0 2.083 2.083h25a2.083 2.083 0 0 0 2.083-2.083v-6.625a6.25 6.25 0 0 0-2.416-12.125"></svg:path></svg:g>`,
})
export class MarketeqArmchair4Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
