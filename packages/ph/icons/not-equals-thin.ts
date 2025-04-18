import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNotEqualsThinIcon],svg[ph-not-equals-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 160a4 4 0 0 1-4 4H100.68L51 218.69a4 4 0 0 1-6-5.38L89.87 164H40a4 4 0 0 1 0-8h57.14l50.91-56H40a4 4 0 0 1 0-8h115.32L205 37.31a4 4 0 0 1 6 5.38L166.13 92H216a4 4 0 0 1 0 8h-57.14L108 156h108a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhNotEqualsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
