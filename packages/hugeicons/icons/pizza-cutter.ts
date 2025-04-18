import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPizzaCutterIcon],svg[hugeicons-pizza-cutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.008 7.006L18.002 7m2.826 2.828a4 4 0 1 1-5.656-5.656a4 4 0 0 1 5.656 5.656M2.84 20.203c1.12 1.063 2.935 1.063 4.055 0a2.64 2.64 0 0 0 .838-2.02a.63.63 0 0 1 .182-.487l2.746-2.605a.6.6 0 0 1 .646-.1c1.037.428 2.299.339 3.309.114c.501-.112.503-.74.056-.983a8 8 0 0 1-1.694-1.23a7.6 7.6 0 0 1-1.55-2.065c-.405-.792-1.576-1.126-2.231-.504L2.84 16.356a2.623 2.623 0 0 0 0 3.848M14 8.5l-2.5 2m4.5.5l-2.5 2" color="currentColor"></svg:path>`,
})
export class HugeiconsPizzaCutterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
