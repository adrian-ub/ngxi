import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiHomeSmileIcon],svg[mynaui-home-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19z"></svg:path><svg:path d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1m-5.5-4.5V11m5 .5V11"></svg:path></svg:g>`,
})
export class MynauiHomeSmileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
