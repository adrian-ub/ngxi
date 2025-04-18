import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWindowClosedOutlineRoundedIcon],svg[material-symbols-light-window-closed-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19h12v-6.5H6zm.616 1q-.672 0-1.144-.472T5 18.385V5.615q0-.67.472-1.143Q5.944 4 6.616 4h10.769q.67 0 1.143.472q.472.472.472 1.144v12.769q0 .67-.472 1.143q-.472.472-1.143.472zM6 11.5h5.23v-.365q0-.162.122-.283q.121-.121.283-.121h.73q.162 0 .283.121t.121.282v.366H18V5.616q0-.27-.173-.443T17.385 5H6.615q-.269 0-.442.173T6 5.616zm.616 7.5H18H6z"></svg:path>`,
})
export class MaterialSymbolsLightWindowClosedOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
