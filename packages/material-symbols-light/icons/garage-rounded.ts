import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGarageRoundedIcon],svg[material-symbols-light-garage-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 21q-.691 0-1.153-.462T3 19.385V4.615q0-.69.463-1.152T4.615 3h14.77q.69 0 1.152.463T21 4.616v14.769q0 .69-.463 1.153T19.385 21zm4-7.23q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.539.23t.23.54t-.23.54t-.54.23m6.77 0q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.539.23t.23.54t-.23.54t-.54.23M6.5 17.5q.214 0 .357-.143T7 17v-1.5h10V17q0 .214.143.357t.357.143t.357-.143T18 17v-5.479q0-.136-.015-.27q-.016-.134-.066-.264L16.723 7.58q-.161-.485-.571-.783t-.944-.298H8.792q-.534 0-.944.298t-.571.783l-1.196 3.405q-.05.131-.065.265q-.016.134-.016.27V17q0 .214.143.357t.357.143m.804-7l.911-2.596q.058-.192.212-.298t.365-.106h6.416q.211 0 .365.106t.212.298l.911 2.596z"></svg:path>`,
})
export class MaterialSymbolsLightGarageRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
