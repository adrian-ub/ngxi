import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPlayPauseRoundedIcon],svg[material-symbols-light-play-pause-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.767 14.35q-.403.292-.835.057t-.432-.728V10.32q0-.492.432-.727t.835.056l2.424 1.679q.347.244.347.672t-.347.67zM14 15.5q-.213 0-.356-.144T13.5 15V9q0-.213.144-.356t.357-.144t.356.144T14.5 9v6q0 .213-.144.356t-.357.144m4 0q-.212 0-.356-.144T17.5 15V9q0-.213.144-.356t.357-.144t.356.144T18.5 9v6q0 .213-.144.356t-.357.144"></svg:path>`,
})
export class MaterialSymbolsLightPlayPauseRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
