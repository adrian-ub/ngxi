import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNoDrinksOutlineRoundedIcon],svg[material-symbols-no-drinks-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.8 11.95l-1.425-1.375L14.775 9h-2.95L9.85 7h6.7l1.8-2H7.85l-2-2h13.575q.675 0 1.1.463T20.95 4.5q0 .275-.1.525t-.3.475zM7 21q-.425 0-.712-.288T6 20t.288-.712T7 19h4v-5.175l-8.9-8.9q-.275-.275-.275-.687t.275-.713q.3-.3.713-.3t.712.3L20.5 20.5q.3.3.3.7t-.3.7t-.712.3t-.713-.3l-6.05-6.05L13 19h4q.425 0 .713.288T18 20t-.288.713T17 21z"></svg:path>`,
})
export class MaterialSymbolsNoDrinksOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
