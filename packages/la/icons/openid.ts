import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laOpenidIcon],svg[la-openid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 4l-4 1.938v19.687c-5.145-.672-8.063-3.023-8.063-5.969c0-2.761 2.985-5.101 7.063-5.843v-2.5c-6.277.796-11 4.23-11 8.343c0 4.293 4.52 7.817 12 8.438l4-1.875zm1 7.375v2.531c1.313.281 2.504.739 3.5 1.313l-2.125 1.187L29 18.063l-.531-5.625l-2.032 1.124c-1.75-1.062-3.968-1.82-6.437-2.187"></svg:path>`,
})
export class LaOpenidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
