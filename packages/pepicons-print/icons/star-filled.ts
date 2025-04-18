import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintStarFilledIcon],svg[pepicons-print-star-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 15.9L6.865 18l.533-5.13L4 9.04l4.965-1.07L11.5 3.5l2.535 4.469L19 9.039l-3.398 3.831l.533 5.13z" opacity=".2"></svg:path><svg:path d="M5.571 17.455L10 15.448l4.429 2.007a.5.5 0 0 0 .704-.507l-.51-4.91l3.251-3.668a.5.5 0 0 0-.269-.82L12.86 6.527l-2.425-4.274a.5.5 0 0 0-.87 0L7.14 6.527L2.395 7.55a.5.5 0 0 0-.27.82l3.253 3.667l-.51 4.911a.5.5 0 0 0 .703.507m4.223-3.01l-3.842 1.74l.443-4.263a.5.5 0 0 0-.123-.384l-2.83-3.191l4.128-.89a.5.5 0 0 0 .33-.242L10 3.513l2.1 3.702a.5.5 0 0 0 .33.242l4.128.89l-2.83 3.191a.5.5 0 0 0-.123.384l.443 4.263l-3.842-1.74a.5.5 0 0 0-.412 0"></svg:path></svg:g>`,
})
export class PepiconsPrintStarFilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
