import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDatabase2LineIcon],svg[ri-database-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12.5c0 .313.461.858 1.53 1.393C7.914 14.585 9.877 15 12 15s4.086-.415 5.47-1.107c1.069-.535 1.53-1.08 1.53-1.393v-2.171C17.35 11.349 14.827 12 12 12s-5.35-.652-7-1.671zm14 2.829C17.35 16.349 14.827 17 12 17s-5.35-.652-7-1.671V17.5c0 .313.461.858 1.53 1.393C7.914 19.585 9.877 20 12 20s4.086-.415 5.47-1.107c1.069-.535 1.53-1.08 1.53-1.393zM3 17.5v-10C3 5.015 7.03 3 12 3s9 2.015 9 4.5v10c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5m9-7.5c2.123 0 4.086-.415 5.47-1.107C18.539 8.358 19 7.813 19 7.5s-.461-.858-1.53-1.393C16.086 5.415 14.123 5 12 5s-4.086.415-5.47 1.107C5.461 6.642 5 7.187 5 7.5s.461.858 1.53 1.393C7.914 9.585 9.877 10 12 10"></svg:path>`,
})
export class RiDatabase2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
