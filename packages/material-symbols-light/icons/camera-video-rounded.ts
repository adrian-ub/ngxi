import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCameraVideoRoundedIcon],svg[material-symbols-light-camera-video-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.996 12.5q-1.032 0-1.764-.735T9.5 9.996t.736-1.764t1.768-.732t1.764.736t.732 1.768t-.735 1.764t-1.769.732M6.5 8.73q.31 0 .521-.21q.21-.209.21-.52t-.21-.52q-.209-.21-.52-.21t-.52.21q-.21.209-.21.52t.21.52q.209.21.52.21M5 20q-.213 0-.356-.144t-.144-.357t.144-.356T5 19h2.648l.756-3.042q-2.283-.214-3.843-1.911T3 10q0-2.507 1.747-4.253Q6.493 4 9 4h6q2.507 0 4.254 1.747Q21 7.493 21 10q0 2.35-1.56 4.047t-3.844 1.91L16.352 19H19q.213 0 .356.144t.144.357t-.144.356T19 20zm7-6.5q1.458 0 2.479-1.021T15.5 10t-1.021-2.479T12 6.5T9.521 7.521T8.5 10t1.021 2.479T12 13.5"></svg:path>`,
})
export class MaterialSymbolsLightCameraVideoRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
