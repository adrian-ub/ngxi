import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsFacebookFill16Icon],svg[qlementine-icons-facebook-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.7 1H2.2A1.27 1.27 0 0 0 .927 2.273v11.5A1.27 1.27 0 0 0 2.2 15.046h6.36v-5.73H6.65v-1.91h1.91v-1.03c0-1.94.946-2.79 2.56-2.79c.772 0 1.18.057 1.37.083V5.5h-1.1c-.685 0-.924.361-.924 1.09v.816h2.01l-.272 1.91h-1.73v5.73h3.18a1.27 1.27 0 0 0 1.273-1.273v-11.5A1.27 1.27 0 0 0 13.654 1z"></svg:path>`,
})
export class QlementineIconsFacebookFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
