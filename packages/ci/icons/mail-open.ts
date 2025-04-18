import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciMailOpenIcon],svg[ci-mail-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 10l6.108 4.612l.002.002c.678.497 1.017.746 1.389.842a2 2 0 0 0 1.002 0c.372-.096.712-.346 1.392-.844L20 10m-.2-.96l-5.599-4.483c-.695-.557-1.043-.835-1.43-.946a2 2 0 0 0-1.046-.014c-.389.1-.744.368-1.454.905L4.27 9.04c-.466.352-.699.528-.867.75a2 2 0 0 0-.327.658C3 10.716 3 11.008 3 11.592V17.8c0 1.12 0 1.68.218 2.108c.192.377.497.682.874.874c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.427.218-.987.218-2.105v-6.276c0-.558 0-.838-.071-1.097a2 2 0 0 0-.31-.642c-.159-.22-.378-.396-.819-.749"></svg:path>`,
})
export class CiMailOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
