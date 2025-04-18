import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelStar2Icon],svg[raphael-star2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.615 4.928c.487-.986 1.284-.986 1.77 0l2.25 4.554c.486.986 1.775 1.923 2.864 2.08l5.023.73c1.09.16 1.335.917.547 1.685l-3.636 3.544c-.788.77-1.28 2.284-1.095 3.37l.858 5.003c.186 1.085-.46 1.553-1.433 1.04l-4.495-2.362c-.974-.51-2.567-.51-3.54 0l-4.496 2.364c-.974.512-1.618.044-1.432-1.04l.858-5.005c.186-1.086-.307-2.6-1.094-3.37L3.93 13.978c-.788-.768-.542-1.525.547-1.684l5.026-.73c1.088-.158 2.377-1.095 2.864-2.08l2.248-4.555z"></svg:path>`,
})
export class RaphaelStar2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
