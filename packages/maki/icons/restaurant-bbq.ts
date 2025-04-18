import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiRestaurantBbqIcon],svg[maki-restaurant-bbq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.017 12.5H14.5L12 15v-2.483a1.62 1.62 0 0 1-1.137.48a1.6 1.6 0 0 1-.993-.345a6.784 6.784 0 0 1 .008-10.31a1.62 1.62 0 0 1 2.122.12V0l2.5 2.5h-2.464a2 2 0 0 1 .123.129a1.624 1.624 0 0 1-.288 2.28a3.52 3.52 0 0 0-1.121 2.586a3.56 3.56 0 0 0 1.147 2.616a1.635 1.635 0 0 1 .232 2.279c-.034.041-.075.072-.112.11M2.504 0l-1 5.5c-.146.805 1.781 1.181 1.75 2l-.25 6.5a.963.963 0 0 0 1 1a.963.963 0 0 0 1-1l-.25-6.5c-.031-.818 1.733-1.18 1.75-2l-1-5.5h-.5l.25 4l-.75.5l-.25-4.5h-.5l-.25 4.5l-.75-.5l.25-4Z"></svg:path>`,
})
export class MakiRestaurantBbqIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
