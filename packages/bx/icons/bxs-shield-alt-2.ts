import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsShieldAlt2Icon],svg[bx-bxs-shield-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21.881 5.223a.496.496 0 0 0-.747-.412c-.672.392-1.718.898-2.643.898c-.421 0-.849-.064-1.289-.198a5.712 5.712 0 0 1-.808-.309c-1.338-.639-2.567-1.767-3.696-2.889a1.008 1.008 0 0 0-.698-.29a1.008 1.008 0 0 0-.698.29c-1.129 1.122-2.358 2.25-3.696 2.889h-.001a5.655 5.655 0 0 1-.807.309c-.44.134-.869.198-1.289.198c-.925 0-1.971-.507-2.643-.898a.496.496 0 0 0-.747.412c-.061 1.538-.077 4.84.688 7.444c1.399 4.763 4.48 7.976 8.91 9.292l.14.041l.14-.014V22v-.014H12l.143.014l.14-.041c4.43-1.316 7.511-4.529 8.91-9.292c.765-2.604.748-5.906.688-7.444z" fill="currentColor"></svg:path>`,
})
export class BxBxsShieldAlt2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
