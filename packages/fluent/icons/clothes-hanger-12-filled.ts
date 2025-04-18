import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentClothesHanger12FilledIcon],svg[fluent-clothes-hanger-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2.5a.5.5 0 0 0-.458.3a.75.75 0 0 1-1.374-.604a2 2 0 1 1 2.805 2.552a1 1 0 0 0-.159.107l3.321 1.923A1.727 1.727 0 0 1 9.27 10H2.73a1.73 1.73 0 0 1-.872-3.223l2.014-1.175a.75.75 0 1 1 .756 1.296L2.614 8.073a.23.23 0 0 0 .115.427h6.54a.227.227 0 0 0 .115-.424L5.94 6.082a1.38 1.38 0 0 1-.691-1.198c0-.403.176-.725.37-.95c.189-.222.42-.384.622-.496A.5.5 0 0 0 6 2.5"></svg:path>`,
})
export class FluentClothesHanger12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
