import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLadderSimpleBoldIcon],svg[ph-ladder-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 20a12 12 0 0 0-12 12v28H76V32a12 12 0 0 0-24 0v192a12 12 0 0 0 24 0v-28h104v28a12 12 0 0 0 24 0V32a12 12 0 0 0-12-12m-12 64v32H76V84ZM76 172v-32h104v32Z"></svg:path>`,
})
export class PhLadderSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
