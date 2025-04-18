import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStarCheckmark16RegularIcon],svg[fluent-star-checkmark-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.808 2.102a.9.9 0 0 0-1.614 0L5.673 5.184l-3.401.495a.9.9 0 0 0-.5 1.535l2.462 2.399L3.653 13a.9.9 0 0 0 1.306.949l.91-.479a5.5 5.5 0 0 1-.461-.887l-.735.387l.345-2.016a5.6 5.6 0 0 1 .138-1.76a.9.9 0 0 0-.186-.26L2.616 6.638l3.253-.473a.9.9 0 0 0 .677-.492l1.455-2.947L9.2 5.155a5.5 5.5 0 0 1 1.041-.149zM15 10.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.146-1.854a.5.5 0 0 0-.708 0L9.5 11.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708"></svg:path>`,
})
export class FluentStarCheckmark16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
