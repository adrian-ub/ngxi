import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFishBoneIcon],svg[tabler-fish-bone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.69 7.44A6.97 6.97 0 0 0 15 12a6.97 6.97 0 0 0 1.699 4.571c1.914-.684 3.691-2.183 5.301-4.565c-1.613-2.384-3.394-3.883-5.312-4.565M2 9.504a41 41 0 0 0 2.422 2.504A40 40 0 0 0 2 14.506M18 11v.01M4.422 12H15m-8-2v4m4-6v8"></svg:path>`,
})
export class TablerFishBoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
