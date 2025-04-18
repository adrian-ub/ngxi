import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggAwardsIcon],svg[gg-awards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 9a6.99 6.99 0 0 1-3 5.745V22h-2.586L12 20.586L10.586 22H8v-7.255A7 7 0 1 1 19 9m-2 0A5 5 0 1 1 7 9a5 5 0 0 1 10 0m-7 10.757l2-2l2 2V15.71a7 7 0 0 1-2 .29a7 7 0 0 1-2-.29z" clip-rule="evenodd"></svg:path>`,
})
export class GgAwardsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
