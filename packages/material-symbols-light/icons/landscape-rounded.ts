import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLandscapeRoundedIcon],svg[material-symbols-light-landscape-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.873 15.708l2.577-3.46q.121-.161.293-.242t.353-.081t.354.08q.171.082.292.243l2.516 3.352q.152.2.354.3t.455.1q.633 0 .909-.562t-.099-1.063l-1.043-1.39q-.161-.224-.161-.488t.162-.482l2.615-3.498q.121-.161.293-.242t.353-.08t.354.08t.292.242l5.385 7.19q.298.405.077.849t-.723.444H4.529q-.52 0-.737-.444t.081-.848"></svg:path>`,
})
export class MaterialSymbolsLightLandscapeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
