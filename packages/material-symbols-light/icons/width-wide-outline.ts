import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWidthWideOutlineIcon],svg[material-symbols-light-width-wide-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19q-.672 0-1.144-.472T3 17.385V6.615q0-.67.472-1.143Q3.944 5 4.616 5h14.769q.67 0 1.143.472q.472.472.472 1.144v10.769q0 .67-.472 1.143q-.472.472-1.143.472zm0-1H7V6H4.616q-.27 0-.443.173T4 6.616v10.769q0 .269.173.442t.443.173M8 18h8V6H8zm9 0h2.385q.269 0 .442-.173t.173-.442V6.615q0-.269-.173-.442T19.385 6H17zM8 6v12z"></svg:path>`,
})
export class MaterialSymbolsLightWidthWideOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
