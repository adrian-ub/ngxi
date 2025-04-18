import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BroomIcon],svg[fluent-mdl2-broom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1984 0q26 0 45 19t19 45t-19 45l-730 730q54 69 81 150t28 168q0 103-39 197t-112 168l-68 68l-227 454L4 1086l454-227l68-68q73-73 167-112t198-39q87 0 168 27t150 82l730-730q19-19 45-19m-915 1543L505 979l-285 142l707 707zm83-98q61-60 94-130t34-158q0-81-30-151t-84-124t-123-83t-152-31q-87 0-157 33t-131 95z"></svg:path>`,
})
export class FluentMdl2BroomIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
