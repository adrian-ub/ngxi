import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelPiechartIcon],svg[raphael-piechart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.583 15.917l1.648-10.78A11 11 0 0 0 15.584 5C9.553 5 4.666 9.888 4.666 15.917c0 6.03 4.888 10.917 10.917 10.917S26.5 21.946 26.5 15.917c0-.256-.02-.507-.038-.76l-10.88.76zm3.854-12.79l-1.648 10.78l10.878-.76a10.91 10.91 0 0 0-9.23-10.02"></svg:path>`,
})
export class RaphaelPiechartIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
