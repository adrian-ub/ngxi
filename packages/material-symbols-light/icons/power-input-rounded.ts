import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPowerInputRoundedIcon],svg[material-symbols-light-power-input-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 14.5q-.213 0-.356-.144T3 13.999t.144-.356t.356-.143h3.058q.212 0 .356.144t.144.357t-.144.356t-.356.143zm6.442 0q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143h3.116q.212 0 .356.144t.144.357t-.144.356t-.356.143zm6.5 0q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143H19.5q.213 0 .356.144t.144.357t-.144.356t-.356.143zM3.5 10.5q-.213 0-.356-.144T3 9.999t.144-.356T3.5 9.5h16q.213 0 .356.144t.144.357t-.144.356t-.356.143z"></svg:path>`,
})
export class MaterialSymbolsLightPowerInputRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
