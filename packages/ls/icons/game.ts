import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsGameIcon],svg[ls-game-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M143 96V24h72v72zm359-72h71v72h-71zm143 215V96h72v287h-72v71h-72v72h72v72h72v71H573v-71h-71v-72H215v72h-72v71H0v-71h72v-72h71v-72H72v-71H0V96h72v143h71v-71h72V96h72v72h143V96h72v72h71v71zm-358 72v-72h-72v72zm215 0v-72h-72v72z"></svg:path>`,
})
export class LsGameIcon {
  readonly viewBox = input("0 0 717 669")
  readonly width = input("1.08em")
  readonly height = input("1em")
}
