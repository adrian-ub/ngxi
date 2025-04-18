import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSimcardthreeIcon],svg[whh-simcardthree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m877 448l-558 558q-18 18-43.5 18t-42.5-18L0 774V465L448 18q17-18 42.5-18T534 18l343 344q18 17 18 42.5T877 448m-125-55L567 207q-16-15-37.5-15T492 207L270 430q-15 15-15 36.5t15 37.5l185 185q16 15 37.5 15t37.5-15l222-222q15-16 15-37.5T752 393M520 569q-7 7-18 7t-19-7l-92-93q-8-8-8-18.5t8-18.5l111-111q8-8 18.5-8t18.5 8l93 93q7 7 7 18t-7 19zm51-135l-46-46q-9-9-19 0l-55 56q-9 9 0 18l46 46q9 9 19 0l55-55q9-9 0-19"></svg:path>`,
})
export class WhhSimcardthreeIcon {
  readonly viewBox = input("0 0 895 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
