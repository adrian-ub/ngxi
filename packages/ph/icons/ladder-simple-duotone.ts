import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLadderSimpleDuotoneIcon],svg[ph-ladder-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 32v192H64V32Z" opacity=".2"></svg:path><svg:path d="M192 24a8 8 0 0 0-8 8v32H72V32a8 8 0 0 0-16 0v192a8 8 0 0 0 16 0v-32h112v32a8 8 0 0 0 16 0V32a8 8 0 0 0-8-8m-8 56v40H72V80ZM72 176v-40h112v40Z"></svg:path></svg:g>`,
})
export class PhLadderSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
