import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiMaraeIcon],svg[maki-marae-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 1c-.25 0-.5.25-.5.5v1.225L3 5.277V4.5c0-.25-.25-.5-.5-.5s-.5.25-.5.5v1.416l-.77.49a.5.5 0 0 0 .54.844L2 7.104V12h1V6.465l4.494-2.867L12 6.602V12h1V7.268l.223.148a.5.5 0 0 0 .554-.832L13 6.066V4.5c0-.25-.25-.5-.5-.5s-.5.25-.5.5v.898L8 2.732V1.5c0-.25-.25-.5-.5-.5m0 4a.5.5 0 0 0-.277.084l-3 2A.5.5 0 0 0 4 7.5V11h1V8h2v3h4V7.5a.5.5 0 0 0-.223-.416l-3-2A.5.5 0 0 0 7.5 5M8 8h2v1H8z"></svg:path>`,
})
export class MakiMaraeIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
