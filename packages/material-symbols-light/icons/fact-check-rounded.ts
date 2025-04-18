import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFactCheckRoundedIcon],svg[material-symbols-light-fact-check-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 20q-.691 0-1.153-.462T3 18.384V5.616q0-.691.463-1.153T4.615 4h14.77q.69 0 1.152.463T21 5.616v12.769q0 .69-.463 1.153T19.385 20zM9 16.5q.213 0 .356-.144t.144-.357t-.144-.356T9 15.5H6q-.213 0-.356.144t-.144.357t.144.356T6 16.5zm5.55-3.613l-1.071-1.072q-.146-.146-.354-.152t-.354.158q-.14.146-.133.354t.153.354l1.194 1.194q.242.242.565.242t.566-.242l3.319-3.32q.146-.145.156-.344q.009-.198-.156-.363q-.166-.165-.357-.165t-.357.165zM9 12.5q.213 0 .356-.144t.144-.357t-.144-.356T9 11.5H6q-.213 0-.356.144t-.144.357t.144.356T6 12.5zm0-4q.213 0 .356-.144t.144-.357t-.144-.356T9 7.5H6q-.213 0-.356.144t-.144.357t.144.356T6 8.5z"></svg:path>`,
})
export class MaterialSymbolsLightFactCheckRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
