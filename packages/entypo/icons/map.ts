import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoMapIcon],svg[entypo-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.447 3.718l-6-3a1 1 0 0 0-.895 0l-5.63 2.815l-5.606-1.869A1 1 0 0 0 0 2.613v13.001c0 .379.214.725.553.894l6 3a1 1 0 0 0 .894 0l5.63-2.814l5.606 1.869a1 1 0 0 0 1.316-.949V4.612a1 1 0 0 0-.552-.894M8 5.231l4-2v11.763l-4 2zM2 4l4 1.333v11.661l-4-2zm16 12.227l-4-1.334V3.231l4 2z"></svg:path>`,
})
export class EntypoMapIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
