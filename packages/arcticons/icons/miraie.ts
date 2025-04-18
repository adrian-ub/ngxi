import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiraieIcon],svg[arcticons-miraie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.986 22.679v8M4.5 30.67v-7.991l4 8l4-7.988v7.988m5.914-3.3a2 2 0 0 1 2-2m-2 0v5.3"></svg:path><svg:circle cx="15.457" cy="22.929" r=".7" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.457 25.379v5.3m27.781-1.009a2 2 0 0 1-3.738-.99v-1.3a2 2 0 1 1 4 0v.65h-4m-9.149-.001h-3.544m-.878 2.65l2.65-8l2.65 8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.17 22.179v8.5h13.572v-8.5l-6.786-4.858z"></svg:path>`,
})
export class ArcticonsMiraieIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
