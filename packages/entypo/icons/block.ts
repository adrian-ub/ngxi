import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoBlockIcon],svg[entypo-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 .4C4.697.4.399 4.698.399 10A9.6 9.6 0 0 0 10 19.601c5.301 0 9.6-4.298 9.6-9.601c0-5.302-4.299-9.6-9.6-9.6M2.399 10a7.6 7.6 0 0 1 12.417-5.877L4.122 14.817A7.57 7.57 0 0 1 2.399 10m7.6 7.599a7.56 7.56 0 0 1-4.815-1.722L15.878 5.184a7.6 7.6 0 0 1-5.879 12.415"></svg:path>`,
})
export class EntypoBlockIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
