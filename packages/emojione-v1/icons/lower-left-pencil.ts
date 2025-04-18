import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1LowerLeftPencilIcon],svg[emojione-v1-lower-left-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ee4237" d="M22.101 57.008L8.131 46.614L40.642 2.912l13.972 10.395z"></svg:path><svg:path fill="#da4241" d="m22.1 57.003l-4.854-3.612L49.76 9.69l4.854 3.611zm-10.056-7.477L8.136 46.62L40.633 2.909l3.908 2.905z"></svg:path><svg:path fill="#e58732" d="m15.12 51.811l-6.982-5.194l-1 8.653l-1.01 8.628l7.986-3.448l7.99-3.44z"></svg:path><svg:path fill="#ea97bd" d="M41.558 1.682c-1.326 1.778-.903 4.335.944 5.71l7.284 5.417c1.847 1.378 4.416 1.043 5.741-.734c1.329-1.783.903-4.34-.944-5.711L47.3.943c-1.846-1.375-4.419-1.044-5.742.739"></svg:path><svg:path fill="#bcbdbf" d="M52.575 16.05L38.606 5.66l1.123-1.51l13.969 10.39z"></svg:path><svg:path fill="#e7e6e6" d="M37.475 7.167L51.44 17.565l1.13-1.515L38.599 5.662zm16.219 7.377L39.722 4.152l1.123-1.51l13.972 10.392z"></svg:path><svg:path fill="#f79420" d="m9.386 57.684l.804.596l7.06-4.88l-5.208-3.88z"></svg:path><svg:path fill="#424143" d="m14.497 60.28l-.387.16l-7.991 3.456l1.01-8.636l.051-.428z"></svg:path>`,
})
export class EmojioneV1LowerLeftPencilIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
