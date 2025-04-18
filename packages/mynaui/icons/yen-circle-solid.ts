import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiYenCircleSolidIcon],svg[mynaui-yen-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12m5.82-5.114a.75.75 0 0 1 1.044.184L12 11.192l2.886-4.122a.75.75 0 0 1 1.229.86l-2.674 3.82h1.74a.75.75 0 0 1 0 1.5h-2.43v1h2.43a.75.75 0 0 1 0 1.5h-2.43v1.75a.75.75 0 0 1-1.5 0v-1.75H8.817a.75.75 0 0 1 0-1.5h2.432v-1H8.818a.75.75 0 0 1 0-1.5h1.742L7.886 7.93a.75.75 0 0 1 .184-1.044"></svg:path>`,
})
export class MynauiYenCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
