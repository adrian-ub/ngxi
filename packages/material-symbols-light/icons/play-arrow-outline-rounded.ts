import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPlayArrowOutlineRoundedIcon],svg[material-symbols-light-play-arrow-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 15.714V8.287q0-.368.242-.588t.566-.22q.106 0 .214.028q.109.027.215.083l5.842 3.733q.186.13.28.298q.093.167.093.379t-.093.379t-.28.298l-5.843 3.733q-.105.055-.214.083q-.108.028-.214.028q-.323 0-.566-.22T9 15.714m1-.364L15.289 12L10 8.65z"></svg:path>`,
})
export class MaterialSymbolsLightPlayArrowOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
